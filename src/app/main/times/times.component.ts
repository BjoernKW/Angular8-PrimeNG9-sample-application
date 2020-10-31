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
  @ViewChild('dt', {static: false}) dt: Table;

  db: Dexie;

  columns = [
    {header: 'User', field: 'user', type: 'string'},
    {header: 'Project', field: 'project', type: 'string'},
    {header: 'Category', field: 'category', type: 'string'},
    {header: 'Start Time', field: 'startTime', type: 'time'},
    {header: 'End Time', field: 'endTime', type: 'time'},
    {header: 'Date', field: 'date', type: 'date'}
  ]

  timesheetData = [
    {
      user: 'Glen',
      project: 'Payroll App',
      category: 'Backend',
      startTime: new Date(),
      endTime: new Date(),
      date: new Date()
    },
    {
      user: 'Karen',
      project: 'Agile Times',
      category: 'Frontend',
      startTime: new Date(),
      endTime: new Date(),
      date: new Date()
    },
    {
      user: 'Si',
      project: 'Mobile App',
      category: 'Operations',
      startTime: new Date(),
      endTime: new Date(),
      date: new Date()
    },
    {
      user: 'Rohit',
      project: 'Agile Times',
      category: 'Backend',
      startTime: new Date(),
      endTime: new Date(),
      date: new Date()
    }
  ];

  projectNames = ['', 'Payroll App', 'Mobile App', 'Agile Times'];

  projects = this.projectNames.map((project) => {
    return {label: project !== '' ? project : 'all', value: project}
  });

  selectedRows: Array<any>;
  selectedContextMenuRows: Array<any>;

  contextMenu: MenuItem[];

  recordCount: number;

  private static _generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  constructor() {
    this.recordCount = this.timesheetData.length;

    this.configureDatabase();
    this.populateDatabase();
  }

  ngOnInit() {
    this.contextMenu = [
      {label: 'Debug', icon: 'fa fa-bug', command: () => this.onDebug(this.selectedContextMenuRows)},
      {label: 'Delete', icon: 'fa fa-close', command: () => this.onDelete(this.selectedContextMenuRows)}
    ];
  }

  generateRandomUser(id: number) {
    const names = ['Joe', 'Mary', 'Phil', 'Karen', 'Si', 'Tim', 'Rohit', 'Jenny', 'Kim', 'Greg', 'Danni']
    const allProjectNames = ['Payroll App', 'Mobile App', 'Agile Times'];
    const allCategories = ['Frontend', 'Backend', 'Operations'];

    const startDate = TimesComponent._generateRandomDate(new Date(2020, 0, 1), new Date());
    startDate.setHours(Math.floor(Math.random() * 4) + 7);
    const endDate = new Date(startDate);
    endDate.setHours(Math.floor(Math.random() * 4) + 13);

    return {
      id: id,
      user: names[id % names.length],
      project: allProjectNames[id % allProjectNames.length],
      category: allCategories[id % allCategories.length],
      startTime: startDate,
      endTime: endDate,
      date: startDate
    };
  }

  getRecordCount(): Dexie.Promise<number> {
    return this.db.table('timesheet').count();
  }

  resetDatabase() {
    let that = this;

    this.dt.loading = true;

    this.db.table('timesheet').clear().then(() => {
      console.log('Database Cleared');
      range(0, MAX_EXAMPLE_RECORDS).subscribe(
        function (id) {
          let randomUser = that.generateRandomUser(id);
          that.db.table('timesheet').add(randomUser);
          if (id % 100 == 0) {
            that.getRecordCount().then((count) => {
              that.recordCount = count;
            })
          }

        },
        function (err) {
          console.log('Do Error: %s', err);
        },
        function () {
          console.log('Do complete');
          that.dt.loading = false;
          that.dt.reset();
          console.log('Finished Reset database');
          that.getRecordCount().then((count) => {
            that.recordCount = count;
          })
        });
    })
  }

  loadTimes(event: LazyLoadEvent) {
    console.log(JSON.stringify(event));

    let table = this.db.table('timesheet');

    let query: any;

    // Dexie doesn't support ordering AND filtering, so we branch here
    // Alternative strategies here: https://github.com/dfahlander/Dexie.js/issues/297
    if (event.filters && event.filters['project']) {
      query = table.where('project').equals(event.filters['project']['value']);
    } else if (event.globalFilter) {
      query = table.where('project').startsWithIgnoreCase(event.globalFilter)
        .or('user').startsWithIgnoreCase(event.globalFilter)
        .or('category').startsWithIgnoreCase(event.globalFilter);
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
      // console.log('Loaded times: %s', JSON.stringify(nextBlockOfTimes));
      this.timesheetData = nextBlockOfTimes;
    });
  }

  onDebug(selectedRows: any) {
    console.log(JSON.stringify(selectedRows));
  }

  onDelete(selectedRows: any) {
    this.timesheetData = this.timesheetData.filter((row) => {
      return !selectedRows.includes(row);
    });
  }

  onEditComplete(editInfo) {
    console.log(editInfo);
    const fieldChanged = editInfo.field;
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
