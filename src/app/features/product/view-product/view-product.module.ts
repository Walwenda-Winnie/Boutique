import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductRoutingModule } from './view-product-routing.module';
import { ViewProductComponent } from './view-product.component';

@NgModule({
  imports: [
    CommonModule,
    ViewProductRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [ViewProductComponent]
})
export class ViewProductModule { }
