import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SupplierListComponent} from "./supplier-list.component";

const routes: Routes = [{
  path: '',
  component: SupplierListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SupplierListRoutingModule { }
