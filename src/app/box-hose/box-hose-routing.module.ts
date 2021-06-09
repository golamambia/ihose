import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxHosePage } from './box-hose.page';

const routes: Routes = [
  {
    path: '',
    component: BoxHosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxHosePageRoutingModule {}
