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
    CommonModule
  ]
})
export class MainModule { }
