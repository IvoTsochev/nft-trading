import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {NavComponent} from './nav/nav.component'
import {AboutUsComponent} from './about-us/about-us.component'
import {CollectionComponent} from './collection/collection.component'
import {IndexComponent} from './index/index.component'
import {UserModule} from './user/user.module'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutUsComponent,
    CollectionComponent,
    IndexComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
