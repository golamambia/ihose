import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectBuyPage } from './direct-buy.page';

const routes: Routes = [
  {
    path: '',
    component: DirectBuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectBuyPageRoutingModule {}
