// dynamic-component.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic-component.component';

@NgModule({
  declarations: [DynamicComponent],
  imports: [CommonModule],
  exports: [DynamicComponent]
})
export class DynamicComponentModule {}