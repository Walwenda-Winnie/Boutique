import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
    {path:"",redirectTo:"bill-list",pathMatch:"full"},

{
path: 'bill-list',
loadChildren: './bill-list/bill-list.module#BillListModule',
data: {pageTitle: 'Bill List'}
},
{
    path: 'create-bill',
    loadChildren: './create-bill/create-bill.module#CreateBillModule',
    data: {pageTitle: 'Create Bill'}
    },
    {
        path: 'update-bill',
        loadChildren: './update-bill/update-bill.module#UpdateBillModule',
        data: {pageTitle: 'Update Bill'}
        },
        {
            path: 'bill-details',
            loadChildren: './bill-details/bill-details.module#BillDetailsModule',
            data: {pageTitle: 'Bill Details'}
            }
    


];

export const routing = RouterModule.forChild(routes)