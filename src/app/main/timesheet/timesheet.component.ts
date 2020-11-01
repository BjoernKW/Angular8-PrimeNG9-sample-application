import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService, TreeNode } from 'primeng/api';
import { SampleProjectsData } from './sample.projects.data.js';
import { SamplePeopleData } from './sample.people.data.js';

declare const moment: any;

export enum PageNames {
  TimePage,
  ProjectPage,
  PeoplePage
}

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
  ]
  displayEditDialog = false;
  PageNames = PageNames;
  dialogPageIndex = PageNames.TimePage;
  dialogPages: MenuItem[] = [
    {label: 'Time'},
    {label: 'Project'},
    {label: 'People'}
  ];
  projectsTree: TreeNode[] = SampleProjectsData.projects;
  people = SamplePeopleData.people;
  selectedDate = new Date();
  selectedProject: TreeNode;
  day = 'Monday';
  dateAndMonth;

  columns = [
    {header: 'Project', field: 'project', type: 'string'},
    {header: 'Category', field: 'category', type: 'string'},
    {header: 'Start Time', field: 'startTime', type: 'time'},
    {header: 'End Time', field: 'endTime', type: 'time'},
    {header: 'Date', field: 'date', type: 'date'}
  ]

  private _userTimeData = [
    {day: 'Monday', startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: 'Frontend'},
    {day: 'Tuesday', startTime: '9:00', endTime: '17:00', project: 'Payroll App', category: 'Backend'},
    {day: 'Wednesday', startTime: '9:00', endTime: '17:00', project: 'Point of Sale App', category: 'Operations'},
    {day: 'Thursday', startTime: '9:00', endTime: '17:00', project: 'Mobile App', category: 'Planning'},
    {day: 'Friday', startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: 'Requirements'},
  ]

  constructor(
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.initializeValues();
  }

  getTimesForDay(tabName: string) {
    return this._userTimeData.filter((row) => {
      return row.day == tabName;
    })
  }

  onChangeTabs(event) {
    const index = event.index;
    this.day = this.daysOfWeek[index];
    this.dateAndMonth = moment().day(this.day).format('MMMM Do, YYYY');
  }

  cancelDialog() {
    this._confirmationService.confirm({
      header: 'Cancel Time Creation',
      message: 'Cancel all changes. Are you sure?',
      accept: () => {
        this.displayEditDialog = false;
        this._messageService.add({severity: 'info', summary: 'Cancelled', detail: 'No changes were saved'});
      },
      reject: () => {
        this._messageService.add({severity: 'warn', summary: 'Continue', detail: 'Please continue your editing'});
        console.log('False cancel. Just keep editing.');
      }
    });
  }

  saveNewEntry() {
    this.displayEditDialog = false;
    this._messageService.add({severity: 'success', summary: 'Entry created', detail: 'Your entry has been created'});
  }

  initializeValues() {
    this.dateAndMonth = moment().day(this.day).format('MMMM Do, YYYY');
  }
}
