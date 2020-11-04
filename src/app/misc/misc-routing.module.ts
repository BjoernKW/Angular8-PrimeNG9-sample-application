import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabViewComponent } from './tab-view/tab-view.component';
import { FlexboxLayoutComponent } from './flexbox-layout/flexbox-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/tab-view', pathMatch: 'full'},
  {path: 'tab-view', component: TabViewComponent},
  {path: 'flexbox-layout', component: FlexboxLayoutComponent},
  {path: 'grid-layout', component: GridLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscRoutingModule { }
