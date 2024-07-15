import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammingPageRoutingModule } from './programming-routing.module';

import { ProgrammingPage } from './programming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammingPageRoutingModule
  ],
  declarations: [ProgrammingPage]
})
export class ProgrammingPageModule {}
