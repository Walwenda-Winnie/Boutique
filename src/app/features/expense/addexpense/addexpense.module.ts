import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseRoutingModule } from './addexpense-routing.module';
import { AddExpenseComponent } from './addexpense.component';
import { FormsModule } from '@angular/forms';
import { ListExpensesModule } from '../list-expenses/list-expenses.module';


@NgModule({
  imports: [
    CommonModule,
    AddExpenseRoutingModule,
    FormsModule,
    ListExpensesModule
  ],

  declarations: [AddExpenseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AddExpenseModule { }
