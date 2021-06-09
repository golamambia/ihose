import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HosePagePage } from './hose-page.page';

const routes: Routes = [
  {
    path: '',
    component: HosePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HosePagePageRoutingModule {}
