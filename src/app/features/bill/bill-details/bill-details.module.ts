import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillDetailsRoutingModule } from './bill-details-routing.module';
import { BillDetailsComponent } from './bill-details.component';


@NgModule({
  imports: [
    CommonModule,
    BillDetailsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [BillDetailsComponent]
})
export class BillDetailsModule { }
