import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AboutUsComponent} from './about-us/about-us.component'
import {CollectionComponent} from './collection/collection.component'
import {IndexComponent} from './index/index.component'

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'collection', component: CollectionComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
