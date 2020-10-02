import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form.component';
import { AutoCompleteComponent } from "./auto-complete/auto-complete.component";

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'auto-complete', component: AutoCompleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    AutoCompleteComponent
  ]
})
export class FormRoutingModule { }
