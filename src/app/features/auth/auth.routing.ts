
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";


export const routes:Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    data: {pageTitle: 'Login'}
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule',
    data: {pageTitle: 'Register'}
  },
  {
    path: 'forgot-password',
    loadChildren: './forgot/forgot.module#ForgotModule',
    data: {pageTitle: 'Forgot Password'}
  },
  {
    path: 'locked',
    loadChildren: './locked/locked.module#LockedModule',
    data: {pageTitle: 'Locked'}
  }
];

export const routing = RouterModule.forChild(routes);
