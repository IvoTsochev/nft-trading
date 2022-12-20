import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, QuerySnapshot } from "@angular/fire/compat/firestore"
import INft from '../models/nft.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap, map } from 'rxjs/operators';
import { of, BehaviorSubject, combineLatest } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class NftService {
  public nftCollection: AngularFirestoreCollection<INft>;

  constructor(
    private db: AngularFirestore,
    private auth: AngularFireAuth,
    private storage: AngularFireStorage
  ) {
    this.nftCollection = db.collection('nfts');
  }

  createNft(data: INft): Promise<DocumentReference<INft>> {
    return this.nftCollection.add(data);
  }

  getUserNfts(sort$: BehaviorSubject<string>) {
    return combineLatest([
      this.auth.user,
      sort$
    ]).pipe(
      switchMap(values => {
        const [user, sort] = values

        if (!user) {
          return of([])
        }

        const query = this.nftCollection.ref.where(
          'uid',
          '==',
          user.uid
        ).orderBy(
          'timestamp',
          sort === '1' ? 'desc' : 'asc'
        )

        return query.get()
      }),
      map(snapshot => (snapshot as QuerySnapshot<INft>).docs)
    )
  }

  updateNft(id: string, title: string) {
    return this.nftCollection.doc(id).update({
      title
    })
  }

  async deleteNft(nft: INft) {
    const nftRef = this.storage.ref(`nft/${nft.fileName}`)

    await nftRef.delete()

    await this.nftCollection.doc(nft.docID).delete()
  }
}
