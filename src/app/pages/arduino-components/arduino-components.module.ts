import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArduinoComponentsPageRoutingModule } from './arduino-components-routing.module';
import { ArduinoComponentsPage } from './arduino-components.page';
import { CardComponentArduinoModule } from 'src/app/components/card-component-arduino/card-component-arduino.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArduinoComponentsPageRoutingModule,
    CardComponentArduinoModule
],
  declarations: [ArduinoComponentsPage],
  exports:[
    ArduinoComponentsPage
  ]
})
export class ArduinoComponentsPageModule {}
