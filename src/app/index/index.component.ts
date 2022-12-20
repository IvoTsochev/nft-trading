import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import INft from '../models/nft.model';
import { BehaviorSubject } from 'rxjs';
import { NftService } from 'src/app/services/nft.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  nfts: INft[] = []
  nftOrder = '1'
  sort$: BehaviorSubject<string>

  constructor(
    private route: ActivatedRoute,
    private nftService: NftService,
  ) {
    this.sort$ = new BehaviorSubject(this.nftOrder)

    console.log('nfts', this.nfts);
  }






  ngOnInit(): void {
    console.log('on init');

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

}
