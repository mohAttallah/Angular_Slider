import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { SliderComponent } from "../app/slider/slider.component";
import { BoxesComponent } from './boxes/boxes.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    SliderComponent,
    BoxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
