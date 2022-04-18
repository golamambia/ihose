import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssemblyHosePageRoutingModule } from './assembly-hose-routing.module';

import { AssemblyHosePage } from './assembly-hose.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssemblyHosePageRoutingModule,IonicSelectableModule
  ],
  declarations: [AssemblyHosePage]
})
export class AssemblyHosePageModule {}
