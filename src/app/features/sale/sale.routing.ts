import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
    {path:"",redirectTo:"create-sale",pathMatch:"full"},

{
    path: 'create-sale',
    loadChildren: './create-sale/create-sale.module#CreateSaleModule',
    data: {pageTitle: 'Create Sale'}
    },
    {
        path: 'sale-list',
        loadChildren: './sale-list/sale-list.module#SaleListModule',
        data: {pageTitle: 'Sale List'}
        },
   
        {
            path: 'sale-details',
            loadChildren: './sale-details/sale-details.module#SaleDetailsModule',
            data: {pageTitle: 'Sale Details'}
            }

];

export const routing = RouterModule.forChild(routes)