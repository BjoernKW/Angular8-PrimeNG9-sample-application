import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetComponent } from './timesheet.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { StepsModule } from 'primeng/steps';
import { TreeModule } from 'primeng/tree';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

describe('TimesheetComponent', () => {
  let component: TimesheetComponent;
  let fixture: ComponentFixture<TimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetComponent],
      imports: [
        FormsModule,
        TabViewModule,
        TableModule,
        DialogModule,
        StepsModule,
        TreeModule,
        NoopAnimationsModule,
        PanelModule,
        DataViewModule,
        TooltipModule,
        ConfirmDialogModule,
        CalendarModule,
        ToastModule
      ],
      providers: [
        ConfirmationService,
        MessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetComponent);
    component = fixture.componentInstance;
    component.initializeValues = () => {
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
