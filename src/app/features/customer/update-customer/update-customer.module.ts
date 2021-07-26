import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCustomerRoutingModule } from './update-customer-routing.module';
import { UpdateCustomerComponent } from './update-customer.component';

@NgModule({
  imports: [
    CommonModule,
    UpdateCustomerRoutingModule
  ],
  declarations: [UpdateCustomerComponent]
})
export class UpdateCustomerModule { }
