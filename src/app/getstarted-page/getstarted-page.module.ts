import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetstartedPagePageRoutingModule } from './getstarted-page-routing.module';

import { GetstartedPagePage } from './getstarted-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetstartedPagePageRoutingModule
  ],
  declarations: [GetstartedPagePage]
})
export class GetstartedPagePageModule {}
