import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArduinoComponentsPage } from './arduino-components.page';

const routes: Routes = [
  {
    path: '',
    component: ArduinoComponentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArduinoComponentsPageRoutingModule {}
