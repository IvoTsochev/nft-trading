import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRoutingModule } from './image-routing.module';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    ManageComponent,
    UploadComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ImageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ImageModule { }
