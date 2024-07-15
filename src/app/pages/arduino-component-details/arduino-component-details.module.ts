import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArduinoComponentDetailsPageRoutingModule } from './arduino-component-details-routing.module';

import { ArduinoComponentDetailsPage } from './arduino-component-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArduinoComponentDetailsPageRoutingModule
  ],
  declarations: [ArduinoComponentDetailsPage]
})
export class ArduinoComponentDetailsPageModule {}
