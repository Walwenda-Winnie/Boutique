import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SaleService } from '../sale/sale.service';
import {routing} from './sale.routing';


@NgModule({
declarations: [],
imports: [
routing,
FormsModule
],
providers: [SaleService]
})
export class SaleModule {}