import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeliveryService } from '../delivery/delivery.service';
import {routing} from './delivery.routing';


@NgModule({
    
declarations: [],
imports: [
routing,
FormsModule
],
providers: [DeliveryService]
})
export class DeliveryModule {}