import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateSaleComponent} from "./update-sale.component";

const routes: Routes = [{
  path: '',
  component: UpdateSaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UpdateSaleRoutingModule { }
