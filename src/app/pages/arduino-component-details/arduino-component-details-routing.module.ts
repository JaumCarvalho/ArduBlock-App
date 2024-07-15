import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArduinoComponentDetailsPage } from './arduino-component-details.page';

const routes: Routes = [
  {
    path: '',
    component: ArduinoComponentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArduinoComponentDetailsPageRoutingModule {}
