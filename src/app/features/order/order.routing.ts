import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
    {path:"",redirectTo:"create-order",pathMatch:"full"},


{
    path: 'create-order',
    loadChildren: './create-order/create-order.module#CreateOrderModule',
    data: {pageTitle: 'Add Order'}
    },
   

];

export const routing = RouterModule.forChild(routes)