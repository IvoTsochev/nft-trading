import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutUsComponent } from './about-us/about-us.component'
import { CollectionComponent } from './collection/collection.component'
import { IndexComponent } from './index/index.component'
import { NftComponent } from './nft/nft.component'
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'nft/:id', component: NftComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
