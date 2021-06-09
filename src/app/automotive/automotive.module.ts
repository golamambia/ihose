import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomotivePageRoutingModule } from './automotive-routing.module';

import { AutomotivePage } from './automotive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomotivePageRoutingModule
  ],
  declarations: [AutomotivePage]
})
export class AutomotivePageModule {}
