import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutAddressaddPageRoutingModule } from './checkout-addressadd-routing.module';

import { CheckoutAddressaddPage } from './checkout-addressadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutAddressaddPageRoutingModule
  ],
  declarations: [CheckoutAddressaddPage]
})
export class CheckoutAddressaddPageModule {}
