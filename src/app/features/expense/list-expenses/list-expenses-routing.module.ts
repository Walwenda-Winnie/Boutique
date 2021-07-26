import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from '../addexpense/addexpense.component';
import {ListExpensesComponent} from "./list-expenses.component";

const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ListExpensesRoutingModule { }
