import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateBillComponent} from "./update-bill.component";

const routes: Routes = [{
  path: '',
  component: UpdateBillComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UpdateBillRoutingModule { }
