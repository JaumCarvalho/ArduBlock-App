import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArduinoComponentsPageModule } from './pages/arduino-components/arduino-components.module';
import { OrientationWarningComponent } from './components/orientation-warning/orientation-warning.component';
import { IndexedDBservice } from './core/services/indexed-db.service';
import { SafePipe } from './shared/pipes/safe.pipe';

@NgModule({
  declarations: [AppComponent, OrientationWarningComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, IndexedDBservice],
  bootstrap: [AppComponent],
})
export class AppModule {}
