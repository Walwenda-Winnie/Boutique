import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
    {path:"",redirectTo:"product-list",pathMatch:"full"},

    {
        path: 'add-product',
        loadChildren: './add-product/add-product.module#AddProductModule',
        data: {pageTitle: 'Add Product'}
        },

{
path: 'product-list',
loadChildren: './product-list/product-list.module#ProductListModule',
data: {pageTitle: 'Product List'}
},

    {
    path: 'edit-product',
    loadChildren: './edit-product/edit-product.module#EditProductModule',
    data: {pageTitle: 'Edit Product'}
    },

    {
        path: 'view-product',
        loadChildren: './view-product/view-product.module#ViewProductModule',
        data: {pageTitle: 'View Product '}
        }
];

export const routing = RouterModule.forChild(routes)