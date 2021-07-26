import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
    {path:"",redirectTo:"Supplier-list",pathMatch:"full"},

{
path: 'supplier-list',
loadChildren: './supplier-list/supplier-list.module#SupplierListModule',
data: {pageTitle: 'Supplier List'}
}
];

export const routing = RouterModule.forChild(routes)