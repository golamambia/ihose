import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutAddresseditPageRoutingModule } from './checkout-addressedit-routing.module';

import { CheckoutAddresseditPage } from './checkout-addressedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutAddresseditPageRoutingModule
  ],
  declarations: [CheckoutAddresseditPage]
})
export class CheckoutAddresseditPageModule {}
