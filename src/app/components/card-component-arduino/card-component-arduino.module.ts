import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { CardComponentArduinoComponent } from './card-component-arduino.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [CardComponentArduinoComponent],
  exports: [CardComponentArduinoComponent]
})
export class CardComponentArduinoModule {}