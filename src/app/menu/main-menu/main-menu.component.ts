import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'AutoComplete', icon: 'pi pi-fw pi-search-plus', routerLink: '/form/auto-complete'},
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: '/form/calendar'},
      { label: 'Inputs', icon: 'pi pi-fw pi-sliders-h', routerLink: '/form/inputs'},
      { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: '/data/table'}
    ];
  }
}
