import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InputsComponent } from './inputs/inputs.component';

const routes: Routes = [
  {path: '', redirectTo: '/inputs', pathMatch: 'full'},
  {path: 'auto-complete', component: AutoCompleteComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'inputs', component: InputsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FormRoutingModule { }
