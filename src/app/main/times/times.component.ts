import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { range } from 'rxjs';
import Dexie from 'dexie';
import { LazyLoadEvent, MenuItem } from 'primeng/api';

const MAX_EXAMPLE_RECORDS = 1000;

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  // See https://github.com/angular/angular/pull/28810 for rationale behind second @ViewChild parameter
  @ViewChild("dt", {static: false}) dt: Table;

  db: Dexie;

  allTimesheetData = [
    {user: 'Glen', project: 'Payroll App', category: 'Backend', startTime: 1000, endTime: 1700, date: 1434243},
    {user: 'Karen', project: 'Agile Times', category: 'Frontend', startTime: 900, endTime: 1700, date: 1434243},
    {user: 'Si', project: 'Mobile App', category: 'Operations', startTime: 1100, endTime: 1700, date: 1434243},
    {user: 'Rohit', project: 'Agile Times', category: 'Backend', startTime: 800, endTime: 1700, date: 1434243},
  ];

  allProjectNames = ['', 'Payroll App', 'Mobile App', 'Agile Times'];

  allProjects = this.allProjectNames.map((proj) => {
    return {label: proj, value: proj}
  });

  selectedRows: Array<any>;

  contextMenu: MenuItem[];

  recordCount: number;

  constructor() {
    this.recordCount = this.allTimesheetData.length;

    this.configureDatabase();
    this.populateDatabase();
  }

  ngOnInit() {
    this.contextMenu = [
      {label: 'Debug', icon: 'fa fa-bug', command: (event) => this.onDebug(this.selectedRows)},
      {label: 'Delete', icon: 'fa fa-close', command: (event) => this.onDelete(this.selectedRows)}
    ];
  }

  generateRandomUser(id: number) {
    const names = ["Joe", "Mary", "Phil", "Karen", "Si", "Tim", "Rohit", "Jenny", "Kim", "Greg", "Danni"]
    const allProjectNames = ['Payroll App', 'Mobile App', 'Agile Times'];
    const allCategories = ['Frontend', 'Backend', 'Operations'];

    let newUser = {
      id: id,
      user: names[id % names.length],
      project: allProjectNames[id % allProjectNames.length],
      category: allCategories[id % allCategories.length],
      startTime: Math.round(Math.random() * 1000),
      endTime: Math.round(Math.random() * 1000),
      date: Math.round(Math.random() * 100000)
    };
    newUser.endTime += newUser.startTime; // to make sure it's later

    return newUser;

  }

  getRecordCount(): Dexie.Promise<number> {
    return this.db.table("timesheet").count();
  }

  resetDatabase() {
    let that = this;

    this.dt.loading = true;

    this.db.table("timesheet").clear().then(() => {
      console.log("Database Cleared");
      range(0, MAX_EXAMPLE_RECORDS).subscribe(
        function (id) {
          let randomUser = that.generateRandomUser(id);
          that.db.table("timesheet").add(randomUser);
          if (id % 100 == 0) {
            that.getRecordCount().then((count) => {
              that.recordCount = count;
            })
          }

        },
        function (err) {
          console.log("Do Error: %s", err);
        },
        function () {
          console.log("Do complete");
          that.dt.loading = false;
          that.dt.reset();
          console.log("Finished Reset database");
          that.getRecordCount().then((count) => {
            that.recordCount = count;
          })
        });
    })
  }

  loadTimes(event: LazyLoadEvent) {
    console.log(JSON.stringify(event));

    let table = this.db.table("timesheet");

    let query: any;

    // Dexie doesn't support ordering AND filtering, so we branch here
    // Alternative strategies here: https://github.com/dfahlander/Dexie.js/issues/297
    if (event.filters && event.filters["project"]) {
      query = table.where("project").equals(event.filters["project"]["value"]);
    } else if (event.globalFilter) {
      query = table.where("project").startsWithIgnoreCase(event.globalFilter)
        .or("user").startsWithIgnoreCase(event.globalFilter)
        .or("category").startsWithIgnoreCase(event.globalFilter);
    } else {
      query = table.orderBy(event.sortField);
    }

    query = query
      .offset(event.first)
      .limit(event.rows);

    if (event.sortOrder == -1) {
      query = query.reverse();
    }

    query.toArray((nextBlockOfTimes) => {
      // console.log("Loaded times: %s", JSON.stringify(nextBlockOfTimes));
      this.allTimesheetData = nextBlockOfTimes;
    });
  }

  onDebug(selectedRows: any) {
    console.log(JSON.stringify(selectedRows));
  }

  onDelete(selectedRows: any) {
    this.allTimesheetData = this.allTimesheetData.filter((row) => {
      return !selectedRows.includes(row);
    });
  }

  onEditComplete(editInfo) {
    const fieldChanged = editInfo.column.field;
    const newRowValues = editInfo.data;
    alert(`You edited ${fieldChanged} to ${newRowValues[fieldChanged]}`);
  }

  onRowSelect(rowInfo) {
    //console.log(JSON.stringify(rowInfo.data)); // or this.selectedRow
  }

  private configureDatabase() {
    this.db = new Dexie('AgileTimes');

    this.db.version(1).stores({
      timesheet: 'id,user,project,category,startTime,endTime,date'
    });
  }

  private populateDatabase() {
    this.getRecordCount().then((count) => {
      this.recordCount = count;
      if (!count) {
        this.resetDatabase();
      }
    });
  }
}
