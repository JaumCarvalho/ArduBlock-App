import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponentArduinoComponent } from './card-component-arduino.component';
import { SafePipe } from 'src/app/shared/pipes/safe.pipe';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [CardComponentArduinoComponent],
  exports: [CardComponentArduinoComponent]
})
export class CardComponentArduinoModule {}