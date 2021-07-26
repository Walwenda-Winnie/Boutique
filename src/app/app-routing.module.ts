import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [


   {
    path: "",
    component: AuthLayoutComponent,canActivate:[AuthGuard],
    data: { pageTitle: "Login" },
    children: [

      {
        path: "",
        redirectTo: "auth/login",
        pathMatch: "full"
      },
      {
        path: "auth",
        loadChildren: "./features/auth/auth.module#AuthModule",
        data: { pageTitle: "Login" }
      }
     
    ]
  },


  {
    path: "",
    component: MainLayoutComponent,
    data: { pageTitle: "Home" },
    children: [
      {
        path: "",
        redirectTo: "dashboard/home",
        pathMatch: "full"
      },

      {
        path: "app-views",
        loadChildren: "./features/app-views/app-views.module#AppViewsModule",
        data: { pageTitle: "App Views" }
      },
      

      {
        path: "cropper",
        loadChildren:
          "app/features/cropper/cropper.module#CropperModule"
      },
      {
        path: "dashboard",
        loadChildren: "./features/dashboard/dashboard.module#DashboardModule",
        data: { pageTitle: "Dashboard" }
      },
      {
        path: "customer",
        loadChildren:
          "./features/customer/customer.module#CustomerModule",
        data: { pageTitle: "Customers" }
      },

      {
        path: "e-commerce",
        loadChildren: "./features/e-commerce/e-commerce.module#ECommerceModule",
        data: { pageTitle: "E-commerce" }
      },
      {
        path: "tables",
        loadChildren: "./features/tables/tables.module#TablesModule",
        data: { pageTitle: "Tables" }
      },
      {
        path: "product",
        loadChildren:
          "./features/product/product.module#ProductModule",
        data: { pageTitle: "Products" }
      },
      {
        path: "order",
        loadChildren:
          "./features/order/order.module#OrderModule",
        data: { pageTitle: "Orders" }
      },

      {
        path: "sale",
        loadChildren:
          "./features/sale/sale.module#SaleModule",
        data: { pageTitle: "Sales" }
      },
   
      {
        path: "supplier",
        loadChildren: 
          "./features/supplier/supplier.module#SupplierModule",
        data: { pageTitle: "Suppliers" }
      },
      {
        path: "expense",
        loadChildren: 
          "./features/expense/expense.module#ExpenseModule",
        data: { pageTitle: "Expenses" }
      },
      {
        path: "delivery",
        loadChildren: 
          "./features/delivery/delivery.module#DeliveryModule",
        data: { pageTitle: "Deliveries" }
      },
     

      {
        path: "forms",
        loadChildren:
          "./features/forms/forms-showcase.module#FormsShowcaseModule",
        data: { pageTitle: "Forms" }
      },

      {
        path: "graphs",
        loadChildren:
          "./features/graphs/graphs-showcase.module#GraphsShowcaseModule",
        data: { pageTitle: "Graphs" }
      },

      {
        path: "maps",
        loadChildren: "./features/maps/maps.module#MapsModule",
        data: { pageTitle: "Maps" }
      },

      // {
      //   path: "miscellaneous",
      //   loadChildren:
      //     "./features/miscellaneous/miscellaneous.module#MiscellaneousModule",
      //   data: { pageTitle: "Miscellaneous" }
      // },
      



      {
        path: "widgets",
        loadChildren:
          "./features/widgets/widgets-showcase.module#WidgetsShowcaseModule",
        data: { pageTitle: "Widgets" }
      }
    ]
  },
   



  { path: "**", redirectTo: "miscellaneous/error404" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers:[AuthGuard]
  
})
export class AppRoutingModule {}
