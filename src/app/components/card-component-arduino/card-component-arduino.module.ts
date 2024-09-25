import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardComponentArduinoComponent } from './card-component-arduino.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [CardComponentArduinoComponent],
  exports: [CardComponentArduinoComponent] // Exporte o componente se necessário
})
export class CardComponentArduinoModule {}
