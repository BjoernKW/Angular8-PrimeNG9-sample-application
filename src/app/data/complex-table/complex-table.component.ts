import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

import { Customer } from '../model/customer.js';
import { Representative } from '../model/representative.js';
import { CustomerService } from '../service/customer.service.js';

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.scss']
})
export class ComplexTableComponent implements OnInit {

  customers: Customer[];

  selectedCustomers: Customer[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;

  // See https://github.com/angular/angular/pull/28810 for rationale behind second @ViewChild parameter
  @ViewChild('dt', {static: false}) table: Table;

  constructor(
    private _customerService: CustomerService
  ) {
  }

  ngOnInit() {
    this._customerService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;
    });

    this.representatives = [
      {name: "Amy Elsner", image: 'amyelsner.png'},
      {name: "Anna Fali", image: 'annafali.png'},
      {name: "Asiya Javayant", image: 'asiyajavayant.png'},
      {name: "Bernardo Dominic", image: 'bernardodominic.png'},
      {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
      {name: "Ioni Bowcher", image: 'ionibowcher.png'},
      {name: "Ivan Magalhaes", image: 'ivanmagalhaes.png'},
      {name: "Onyama Limba", image: 'onyamalimba.png'},
      {name: "Stephen Shaw", image: 'stephenshaw.png'},
      {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    this.statuses = [
      {label: 'Unqualified', value: 'unqualified'},
      {label: 'Qualified', value: 'qualified'},
      {label: 'New', value: 'new'},
      {label: 'Negotiation', value: 'negotiation'},
      {label: 'Renewal', value: 'renewal'},
      {label: 'Proposal', value: 'proposal'}
    ]
  }

  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onDateSelect(value) {
    this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  onRepresentativeChange(event) {
    debugger;
    this.table.filter(event.value, 'representative', 'in')
  }
}
