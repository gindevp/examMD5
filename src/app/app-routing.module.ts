import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TourComponent} from "./product/tour/tour.component";


const routes: Routes = [
  {
    path: 'list',
    component: TourComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
