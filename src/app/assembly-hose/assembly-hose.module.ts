import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssemblyHosePageRoutingModule } from './assembly-hose-routing.module';

import { AssemblyHosePage } from './assembly-hose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssemblyHosePageRoutingModule
  ],
  declarations: [AssemblyHosePage]
})
export class AssemblyHosePageModule {}
