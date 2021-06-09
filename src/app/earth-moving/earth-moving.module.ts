import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarthMovingPageRoutingModule } from './earth-moving-routing.module';

import { EarthMovingPage } from './earth-moving.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarthMovingPageRoutingModule
  ],
  declarations: [EarthMovingPage]
})
export class EarthMovingPageModule {}
