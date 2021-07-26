import {NgModule} from '@angular/core';
import { NgserviceService } from './ngservice.service';
import {routing} from './product.routing';
import { Routes } from '@angular/router';

@NgModule({
declarations: [    
],
imports: [
routing
],
providers: [NgserviceService]

})
export class ProductModule {}