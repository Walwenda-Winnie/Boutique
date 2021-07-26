import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryListRoutingModule } from './delivery-list-routing.module';
import { DeliveryListComponent } from './delivery-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DeliveryListRoutingModule,
    FormsModule
  ],

  declarations: [DeliveryListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DeliveryListModule { }
