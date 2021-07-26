import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateSaleComponent} from "./create-sale.component";

const routes: Routes = [{
  path: '',
  component: CreateSaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CreateSaleRoutingModule { }
