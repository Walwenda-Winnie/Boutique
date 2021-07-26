import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
    {path:"",redirectTo:"delivery-list",pathMatch:"full"},

{
path: 'delivery-list',
loadChildren: './delivery-list/delivery-list.module#DeliveryListModule',
data: {pageTitle: 'Delivery List'}
},

];

export const routing = RouterModule.forChild(routes)