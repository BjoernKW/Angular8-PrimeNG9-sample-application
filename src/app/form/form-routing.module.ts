import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form.component';
import { AutoCompleteComponent } from "./auto-complete/auto-complete.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { InputsComponent } from "./inputs/inputs.component";

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'inputs', component: InputsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    AutoCompleteComponent,
    CalendarComponent,
    InputsComponent
  ]
})
export class FormRoutingModule { }
