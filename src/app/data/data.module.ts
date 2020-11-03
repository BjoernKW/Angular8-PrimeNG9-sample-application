import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ComplexTableComponent } from './complex-table/complex-table.component';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { DataViewComponent } from './data-view/data-view.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { TreeTableModule } from 'primeng/treetable';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [
    TableComponent,
    ComplexTableComponent,
    DataViewComponent,
    PickListComponent,
    TreeTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataRoutingModule,
    TableModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    ProgressBarModule,
    DataViewModule,
    PickListModule,
    TreeTableModule,
    RatingModule,
    HttpClientModule,
  ]
})
export class DataModule { }
