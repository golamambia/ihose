import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutOnlinePage } from './checkout-online.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutOnlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutOnlinePageRoutingModule {}
