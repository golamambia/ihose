import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutOnlinePageRoutingModule } from './checkout-online-routing.module';

import { CheckoutOnlinePage } from './checkout-online.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutOnlinePageRoutingModule
  ],
  declarations: [CheckoutOnlinePage]
})
export class CheckoutOnlinePageModule {}
