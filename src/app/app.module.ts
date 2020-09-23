import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ObservableComponent } from './observable/observable.component';
import { ObsTiemposComponent } from './obs-tiempos/obs-tiempos.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ObservableComponent, ObsTiemposComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
