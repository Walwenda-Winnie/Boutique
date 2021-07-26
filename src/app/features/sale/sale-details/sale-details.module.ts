import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleDetailsRoutingModule } from './sale-details-routing.module';
import { SaleDetailsComponent } from './sale-details.component';

@NgModule({
  imports: [
    CommonModule,
    SaleDetailsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [SaleDetailsComponent]
})
export class SaleDetailsModule { }
