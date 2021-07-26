import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
    {path:"",redirectTo:"create-customer",pathMatch:"full"},


{
path: 'create-customer',
loadChildren: './create-customer/create-customer.module#CreateCustomerModule',
data: {pageTitle: 'Create Customer'}
},
{
    path: 'update-customer',
    loadChildren: './update-customer/update-customer.module#UpdateCustomerModule',
    data: {pageTitle: 'Update Customer'}
    },
    {
        path: 'customer-details',
        loadChildren: './customer-details/customer-details.module#CustomerDetailsModule',
        data: {pageTitle: 'Customer Details'}
        }

];

export const routing = RouterModule.forChild(routes)