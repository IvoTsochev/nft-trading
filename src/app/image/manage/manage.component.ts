import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NftService } from 'src/app/services/nft.service';
import INft from 'src/app/models/nft.model';
import { ModalService } from 'src/app/services/modal.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})

export class ManageComponent implements OnInit {
  nftOrder = '1'
  nfts: INft[] = []
  activeNft: INft | null = null
  sort$: BehaviorSubject<string>

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nftService: NftService,
    private modal: ModalService
  ) {
    this.sort$ = new BehaviorSubject(this.nftOrder)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.nftOrder = params.sort === '2' ? params.sort : '1'
      this.sort$.next(this.nftOrder)
    })
    this.nftService.getUserNfts(this.sort$).subscribe(docs => {
      this.nfts = []

      docs.forEach(doc => {
        this.nfts.push({
          docID: doc.id,
          ...doc.data()
        })
      })
    })
  }


  sort(event: Event) {
    const { value } = (event.target as HTMLInputElement);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sort: value
      }
    })
  }

  openModal($event: Event, nft: INft) {
    $event.preventDefault()

    this.activeNft = nft;

    this.modal.toggleModal('editNft')
  }

  update($event: INft) {
    this.nfts.forEach((element, index) => {
      if (element.docID == $event.docID) {
        this.nfts[index].title = $event.title
      }
    })
  }

  deleteNft($event: Event, nft: INft) {
    $event.preventDefault()

    this.nftService.deleteNft(nft)

    this.nfts.forEach((element, index) => {
      if (element.docID == nft.docID) {
        this.nfts.splice(index, 1)
      }
    })
  }

}
