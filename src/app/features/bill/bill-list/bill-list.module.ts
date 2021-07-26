import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillListRoutingModule } from './bill-list-routing.module';
import { BillListComponent } from './bill-list.component';


@NgModule({
  imports: [
    CommonModule,
    BillListRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [BillListComponent]
})
export class BillListModule { }
