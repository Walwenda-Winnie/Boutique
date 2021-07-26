import {NgModule} from '@angular/core';
import { BillService } from '../bill/bill.service';
import {routing} from './bill.routing';


@NgModule({
declarations: [],
imports: [
routing
],
providers: [BillService]
})
export class BillModule {}