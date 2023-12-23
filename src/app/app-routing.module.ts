import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from "./slider/slider.component";
import { BoxesComponent } from './boxes/boxes.component';
const routes: Routes = [
  { path: 'slider', component: SliderComponent, pathMatch: 'full' },
  { path: 'boxes', component: BoxesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
