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
          {label: 'Projects', icon: 'pi-fw fa fa-tasks', routerLink: ['/main/projects']},
          {label: 'Settings', icon: 'pi-fw fas fa-sliders-h', routerLink: ['/main/settings']},
        ]
      },
      {
        label: 'Miscellaneous',
        icon: 'fab fa-mix',
        items: [
          {label: 'AutoComplete', icon: 'pi pi-fw pi-search-plus', routerLink: '/form/auto-complete'},
          {label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: '/form/calendar'},
          {label: 'Inputs', icon: 'pi pi-fw pi-sliders-h', routerLink: '/form/inputs'},
          {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: '/data/table'},
          {label: 'Complex table', icon: 'pi-fw fas fa-table', routerLink: '/data/complex-table'},
          {label: 'Tree table', icon: 'pi-fw fas fa-chevron-down', routerLink: '/data/tree-table'},
          {label: 'Data view', icon: 'pi-fw fas fa-database', routerLink: '/data/data-view'},
          {label: 'Pick list', icon: 'pi-fw fas fa-list', routerLink: '/data/pick-list'},
          {label: 'Tab view', icon: 'pi-fw fas fa-ellipsis-h', routerLink: '/misc/tab-view'},
          {label: 'Flexbox layout', icon: 'pi-fw fas fas fa-ruler', routerLink: '/misc/flexbox-layout'},
          {label: 'Grid layout', icon: 'pi-fw fas fa-th', routerLink: '/misc/grid-layout'}
        ]
      }
    ];

    this.minifiedMenuItems = [];
    this.menuItems.forEach((item: MenuItem) => {
      this.minifiedMenuItems.push({icon: item.icon, routerLink: item.routerLink});
    });
  }
}
