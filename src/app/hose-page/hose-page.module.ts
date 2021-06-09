import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HosePagePageRoutingModule } from './hose-page-routing.module';

import { HosePagePage } from './hose-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HosePagePageRoutingModule
  ],
  declarations: [HosePagePage]
})
export class HosePagePageModule {}
