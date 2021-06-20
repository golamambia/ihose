import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetstartedPagePage } from './getstarted-page.page';

const routes: Routes = [
  {
    path: '',
    component: GetstartedPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetstartedPagePageRoutingModule {}
