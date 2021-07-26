import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../order/order.service';
import { CreateOrderModule } from './create-order/create-order.module';
import {routing} from './order.routing';






@NgModule({
    
declarations: [],
imports: [
routing,
FormsModule,
CreateOrderModule,

],
providers: [OrderService]
})
export class OrderModule {}