import { Component, OnInit, OnDestroy, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import INft from 'src/app/models/nft.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NftService } from 'src/app/services/nft.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit, OnDestroy, OnChanges {

  @Input() activeNft: INft | null = null
  inSubmission = false;
  showAlert = false;
  alertColor = 'blue';
  alertMsg = 'Please wait! Updating your NFT...'
  @Output() update = new EventEmitter()

  nftID = new FormControl('', {
    nonNullable: true
  })

  title = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(3),
    ],
    nonNullable: true
  })

  editForm = new FormGroup({
    title: this.title,
    id: this.nftID
  });

  constructor(
    private modal: ModalService,
    private nftService: NftService
  ) {

  }

  ngOnInit(): void {
    this.modal.register('editNft')
  }

  ngOnDestroy(): void {
    this.modal.unregister('editNft')
  }

  ngOnChanges() {
    if (!this.activeNft) {
      return;
    };

    this.inSubmission = false;
    this.showAlert = false;
    this.nftID.setValue(this.activeNft.docID as string)
    this.title.setValue(this.activeNft.title)
  }

  async submit() {

    if (!this.activeNft) {
      return
    }

    this.inSubmission = true;
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = 'Please wait! Updating your NFT...';

    try {
      await this.nftService.updateNft(
        this.nftID.value,
        this.title.value
      )
    } catch (error) {
      this.inSubmission = false;
      this.alertColor = 'red';
      this.alertMsg = 'Something went wrong! Please try again later.'
      return
    }

    this.activeNft.title = this.title.value
    this.update.emit(this.activeNft)

    this.inSubmission = false;
    this.alertColor = 'green';
    this.alertMsg = 'Success! Your NFT has been updated!'
  }

}
