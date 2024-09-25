import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArduinoComponentsPage } from './pages/arduino-components/arduino-components.page';

const routes: Routes = [
  {
    path: '', redirectTo: 'folder/Executar', pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'arduino-components',
    component: ArduinoComponentsPage
  },
  {
    path: 'programming',
    loadChildren: () => import('./pages/programming/programming.module').then( m => m.ProgrammingPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
