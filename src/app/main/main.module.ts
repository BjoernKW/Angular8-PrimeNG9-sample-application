import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesComponent } from './times/times.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { StatsComponent } from './stats/stats.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { SpinnerModule } from 'primeng/spinner';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { StepsModule } from 'primeng/steps';
import { GMapModule } from 'primeng/gmap';
import { TreeModule } from 'primeng/tree';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DragDropModule } from 'primeng/dragdrop';
import { GalleriaModule } from 'primeng/galleria';
import { DataViewModule } from 'primeng/dataview';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimesComponent,
    DashboardComponent,
    ValidationErrorsComponent,
    ProfileComponent,
    ProjectsComponent,
    SettingsComponent,
    StatsComponent,
    TimesheetComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    TableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    TreeModule,
    GMapModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
    DragDropModule,
    GalleriaModule,
    DataViewModule,
    FullCalendarModule
  ]
})
export class MainModule { }
