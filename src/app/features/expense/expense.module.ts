import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseService } from '../expense/expense.service';
import { AddExpenseComponent } from './addexpense/addexpense.component';
import { AddExpenseModule } from './addexpense/addexpense.module';
import {routing} from './expense.routing';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';
import { ListExpensesModule } from './list-expenses/list-expenses.module';

const routers: Routes=[
    {path: '', component:ListExpensesComponent},
    {path: 'addexpense',component:AddExpenseComponent},
    {path: 'editexpense/:id',component:AddExpenseComponent},
    {path:'list-expenses', component: ListExpensesComponent}
   


]


@NgModule({
declarations: [],
imports: [
    HttpClientModule,
    CommonModule,
    ListExpensesModule,
    AddExpenseModule,
    FormsModule,
   
routing
],
providers: [ExpenseService]
})
export class ExpenseModule {}