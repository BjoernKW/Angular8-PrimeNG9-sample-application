import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, Message, TreeNode } from 'primeng/api';
import { SampleProjectsData } from './sample.projects.data.js';
import { SamplePeopleData } from './sample.people.data.js';

declare const moment: any;
declare const google: any;

export enum PageNames {
  TimePage,
  ProjectPage,
  PlacePage,
  PeoplePage
}

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
  ]
  displayEditDialog = false;
  PageNames = PageNames;
  dialogPageIndex = PageNames.TimePage;
  dialogPages: MenuItem[] = [
    {label: "Time"},
    {label: "Project"},
    {label: "Place"},
    {label: "People"}
  ];
  projectsTree: TreeNode[] = SampleProjectsData.projects;
  people = SamplePeopleData.people;
  selectedProject: TreeNode;
  messages: Message[] = [];
  mapOptions = {
    center: {lat: -33.8688, lng: 151.2093},
    zoom: 5
  };
  mapOverlays = [];
  day = "Monday";
  dateAndMonth;
  private userTimeData = [
    {day: "Monday", startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: "Frontend"},
    {day: "Tuesday", startTime: '9:00', endTime: '17:00', project: 'Payroll App', category: "Backend"},
    {day: "Wednesday", startTime: '9:00', endTime: '17:00', project: 'Point of Sale App', category: "Operations"},
    {day: "Thursday", startTime: '9:00', endTime: '17:00', project: 'Mobile App', category: "Planning"},
    {day: "Friday", startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: "Requirements"},
  ]

  constructor(private _confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.initializeValues();
  }

  getTimesForDay(tabName: string) {
    return this.userTimeData.filter((row) => {
      return row.day == tabName;
    })
  }

  onChangeTabs(event) {
    let index = event.index;
    this.day = this.daysOfWeek[index];
    this.dateAndMonth = moment().day(this.day).format("MMMM Do, YYYY");
  }

  cancelDialog() {
    this._confirmationService.confirm({
      header: 'Cancel Time Creation',
      message: 'Cancel all changes. Are you sure?',
      accept: () => {
        this.displayEditDialog = false;
        this.messages.push({severity: 'info', summary: 'Edits Cancelled', detail: 'No changes were saved'});
      },
      reject: () => {
        this.messages.push({severity: 'warn', summary: 'Cancelled the Cancel', detail: 'Please continue your editing'});
        console.log("False cancel. Just keep editing.");
      }
    });
  }

  onMarkerClick(markerEvent) {
    let markerTitle = markerEvent.overlay.title;
    let markerPosition = markerEvent.overlay.position;

    alert(`You clicked on ${markerTitle} at ${markerPosition}`);

    markerEvent.map.panTo(markerPosition);
    markerEvent.map.setZoom(12);
  }

  saveNewEntry() {
    this.displayEditDialog = false;
    this.messages.push({severity: 'success', summary: 'Entry Created', detail: 'Your entry has been created'});
  }

  initializeValues() {
    this.mapOverlays = [
      new google.maps.Marker({position: {lat: -35.3075, lng: 149.124417}, title: "Canberra Office"}),
      new google.maps.Marker({position: {lat: -33.8688, lng: 151.2093}, title: "Sydney Office"}),
      new google.maps.Marker({position: {lat: -37.813611, lng: 144.963056}, title: "Melbourne Office"}),
      new google.maps.Marker({position: {lat: -28.016667, lng: 153.4}, title: "Gold Coast Office"})
    ];

    this.dateAndMonth = moment().day(this.day).format("MMMM Do, YYYY");
  }
}
