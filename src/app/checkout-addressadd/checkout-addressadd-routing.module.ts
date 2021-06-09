import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutAddressaddPage } from './checkout-addressadd.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutAddressaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutAddressaddPageRoutingModule {}
