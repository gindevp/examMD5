import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TourComponent} from "./product/tour/tour.component";
import {TourCreateComponent} from "./product/tour-create/tour-create.component";
import {TourEditComponent} from "./product/tour-edit/tour-edit.component";
import {TourDetailComponent} from "./product/tour-detail/tour-detail.component";


const routes: Routes = [
  {
    path: 'list',
    component: TourComponent
  },
  {
    path: 'create',
    component: TourCreateComponent
  },
  {
    path: 'edit/:id',
    component: TourEditComponent
  },
  {
    path: 'detail/:id',
    component: TourDetailComponent
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
