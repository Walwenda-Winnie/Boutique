import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsRoutingModule } from './customer-details-routing.module';
import { CustomerDetailsComponent } from './customer-details.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerDetailsRoutingModule
  ],
  declarations: [CustomerDetailsComponent]
})
export class CustomerDetailsModule { }
