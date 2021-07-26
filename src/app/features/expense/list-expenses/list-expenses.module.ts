import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListExpensesRoutingModule } from './list-expenses-routing.module';
import { ListExpensesComponent } from './list-expenses.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ListExpensesRoutingModule,
    FormsModule
  ],

  declarations: [ListExpensesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ListExpensesModule { }
