import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavComponent } from './nav/nav.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { CollectionComponent } from './collection/collection.component'
import { IndexComponent } from './index/index.component'
import { UserModule } from './user/user.module'
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ImageModule } from './image/image.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutUsComponent,
    CollectionComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
