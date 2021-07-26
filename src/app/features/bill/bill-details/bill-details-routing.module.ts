import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BillDetailsComponent} from "./bill-details.component";

const routes: Routes = [{
  path: '',
  component: BillDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BillDetailsRoutingModule { }
