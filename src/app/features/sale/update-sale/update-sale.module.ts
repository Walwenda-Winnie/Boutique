import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateSaleRoutingModule } from './update-sale-routing.module';
import { UpdateSaleComponent } from './update-sale.component';

@NgModule({
  imports: [
    CommonModule,
    UpdateSaleRoutingModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

  declarations: [UpdateSaleComponent]
})
export class UpdateSaleModule { }

