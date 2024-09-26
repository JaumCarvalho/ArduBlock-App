import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammingPageRoutingModule } from './programming-routing.module';

import { ProgrammingPage } from './programming.page';
;

import "blockly/blocks";

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
