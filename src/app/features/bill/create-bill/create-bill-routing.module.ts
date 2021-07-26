import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateBillComponent} from "./create-bill.component";

const routes: Routes = [{
  path: '',
  component: CreateBillComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CreateBillRoutingModule { }
