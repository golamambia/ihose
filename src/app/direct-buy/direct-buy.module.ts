import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectBuyPageRoutingModule } from './direct-buy-routing.module';

import { DirectBuyPage } from './direct-buy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectBuyPageRoutingModule
  ],
  declarations: [DirectBuyPage]
})
export class DirectBuyPageModule {}
