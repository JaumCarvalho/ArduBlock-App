import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArduinoComponentsPage } from './arduino-components.page';
import { ArduinoComponentsPageRoutingModule } from './arduino-components-routing.module';
import { CardComponentArduinoModule } from "../../components/card-component-arduino/card-component-arduino.module"; // Importe o módulo correto

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArduinoComponentsPageRoutingModule,
    CardComponentArduinoModule
],
  declarations: [ArduinoComponentsPage]
})
export class ArduinoComponentsPageModule {}
