import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AboutUsComponent} from './about-us/about-us.component'
import {CollectionComponent} from './collection/collection.component'
import {IndexComponent} from './index/index.component'
import {LoginComponent} from './login/login.component'
import {SignUpComponent} from './sign-up/sign-up.component'

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
