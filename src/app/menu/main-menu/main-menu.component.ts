import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menuItems: MenuItem[];
  minifiedMenuItems: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Main',
        items: [
          {label: 'Dashboard', icon: 'fa fa-home', routerLink: ['/main/dashboard']},
          {
            label: 'Times',
            icon: 'fa fa-calendar',
            routerLink: ['/main/times']
          },
          {
            label: 'Timesheet',
            icon: 'fa fa-clock',
            routerLink: ['/main/timesheet'],
          },
          {label: 'Projects', icon: 'fa fa-tasks', routerLink: ['/main/projects']},
          {label: 'Profile', icon: 'fa fa-users', routerLink: ['/main/profile']},
          {label: 'Settings', icon: 'fas fa-sliders-h', routerLink: ['/main/settings']},
        ]
      },
      {
        label: 'Miscellaneous',
        icon: 'fab fa-mix',
        items: [
          {label: 'AutoComplete', icon: 'pi pi-fw pi-search-plus', routerLink: '/form/auto-complete'},
          {label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: '/form/calendar'},
          {label: 'Inputs', icon: 'pi pi-fw pi-sliders-h', routerLink: '/form/inputs'},
          {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: '/data/table'}
        ]
      }
    ];

    this.minifiedMenuItems = [];
    this.menuItems.forEach((item: MenuItem) => {
      this.minifiedMenuItems.push({icon: item.icon, routerLink: item.routerLink});
    });
  }
}
