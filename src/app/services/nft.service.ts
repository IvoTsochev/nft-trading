import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from "@angular/fire/compat/firestore"
import INft from '../models/nft.model';

@Injectable({
  providedIn: 'root'
})
export class NftService {
  public nftCollection: AngularFirestoreCollection<INft>;

  constructor(
    private db: AngularFirestore
  ) {
    this.nftCollection = db.collection('nfts');
  }

  createNft(data: INft): Promise<DocumentReference<INft>> {
    return this.nftCollection.add(data);
  }
}
