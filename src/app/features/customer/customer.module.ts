import { HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {routing} from './customer.routing';


@NgModule({
declarations: [],
imports: [
routing,
FormsModule,
HttpClientModule
],
providers: []
})
export class CustomerModule {}