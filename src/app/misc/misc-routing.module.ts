import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabViewComponent } from './tab-view/tab-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/tab-view', pathMatch: 'full'},
  {path: 'tab-view', component: TabViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscRoutingModule { }
