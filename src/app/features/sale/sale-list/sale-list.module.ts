import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleListRoutingModule } from './sale-list-routing.module';
import { SaleListComponent } from './sale-list.component';


@NgModule({
  imports: [
    CommonModule,
    SaleListRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [SaleListComponent]
})
export class SaleListModule { }
