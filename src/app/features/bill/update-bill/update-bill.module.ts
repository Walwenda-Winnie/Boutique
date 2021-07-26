import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateBillRoutingModule } from './update-bill-routing.module';
import { UpdateBillComponent } from './update-bill.component';

@NgModule({
  imports: [
    CommonModule,
    UpdateBillRoutingModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

  declarations: [UpdateBillComponent]
})
export class UpdateBillModule { }
