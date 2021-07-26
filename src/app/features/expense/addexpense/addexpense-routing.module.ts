import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListExpensesComponent } from '../list-expenses/list-expenses.component';
import {AddExpenseComponent} from "./addexpense.component";

const routes: Routes = [{
  path: '',
  component: AddExpenseComponent
},
  {
    path:'list-expenses',
    component: ListExpensesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AddExpenseRoutingModule { }
