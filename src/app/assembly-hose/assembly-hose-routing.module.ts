import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssemblyHosePage } from './assembly-hose.page';

const routes: Routes = [
  {
    path: '',
    component: AssemblyHosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssemblyHosePageRoutingModule {}
