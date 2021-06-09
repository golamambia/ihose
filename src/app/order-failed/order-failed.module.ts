import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderFailedPageRoutingModule } from './order-failed-routing.module';

import { OrderFailedPage } from './order-failed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderFailedPageRoutingModule
  ],
  declarations: [OrderFailedPage]
})
export class OrderFailedPageModule {}
