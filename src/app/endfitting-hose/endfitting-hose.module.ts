import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndfittingHosePageRoutingModule } from './endfitting-hose-routing.module';

import { EndfittingHosePage } from './endfitting-hose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndfittingHosePageRoutingModule
  ],
  declarations: [EndfittingHosePage]
})
export class EndfittingHosePageModule {}
