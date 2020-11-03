import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
import { ComplexTableComponent } from './complex-table/complex-table.component';
import { DataViewComponent } from './data-view/data-view.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { TreeTableComponent } from './tree-table/tree-table.component';

const routes: Routes = [
  {path: '', redirectTo: '/table', pathMatch: 'full'},
  {path: 'table', component: TableComponent},
  {path: 'complex-table', component: ComplexTableComponent},
  {path: 'data-view', component: DataViewComponent},
  {path: 'pick-list', component: PickListComponent},
  {path: 'tree-table', component: TreeTableComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DataRoutingModule { }
