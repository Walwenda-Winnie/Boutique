import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerDetailsComponent} from "./customer-details.component";

const routes: Routes = [{
  path: '',
  component: CustomerDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CustomerDetailsRoutingModule { }
