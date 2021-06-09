import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarthMovingPage } from './earth-moving.page';

const routes: Routes = [
  {
    path: '',
    component: EarthMovingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarthMovingPageRoutingModule {}
