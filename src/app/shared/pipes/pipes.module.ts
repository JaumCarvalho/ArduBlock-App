import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [SafePipe],
  imports: [CommonModule],
  exports: [SafePipe] // Exportar o pipe para outros módulos
})
export class PipesModule {}
