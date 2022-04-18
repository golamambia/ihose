import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxHosePageRoutingModule } from './box-hose-routing.module';

import { BoxHosePage } from './box-hose.page';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoxHosePageRoutingModule,
     
    IonicSelectableModule
  ],
  declarations: [BoxHosePage]
})
export class BoxHosePageModule {}
