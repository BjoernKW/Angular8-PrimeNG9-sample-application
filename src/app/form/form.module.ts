import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InputsComponent } from './inputs/inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    FormComponent,
    AutoCompleteComponent,
    CalendarComponent,
    InputsComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  exports: [
    AutoCompleteComponent,
    CalendarComponent,
    InputsComponent
  ]
})
export class FormModule { }
