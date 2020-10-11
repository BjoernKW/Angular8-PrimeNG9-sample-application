import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataComponent } from './data.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: DataComponent },
  { path: 'table', component: TableComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DataRoutingModule { }
