import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammingPage } from './programming.page';

const routes: Routes = [
  {
    path: '',
    component: ProgrammingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammingPageRoutingModule {}
