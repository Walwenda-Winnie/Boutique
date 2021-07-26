import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
    {path:"",redirectTo:"/list-expenses",pathMatch:"full"},

{
path: 'list-expenses',
loadChildren: './list-expenses/list-expenses.module#ListExpensesModule',
data: {pageTitle: 'List Expenses'}
},

{
    path: 'addexpense',
    loadChildren: './addexpense/addexpense.module#AddExpenseModule',
    data: {pageTitle: 'Add Expense'}
    },

    


];

export const routing = RouterModule.forChild(routes)