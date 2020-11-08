import { Component, OnInit } from '@angular/core';

// See https://github.com/primefaces/primeng/blob/master/src/app/components/inputtext/inputtext.ts for
// details on pInputText directive
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  selectedState: any = null;

  states: any[] = [
    {name: 'Arizona', code: 'Arizona'},
    {name: 'California', value: 'California'},
    {name: 'Florida', code: 'Florida'},
    {name: 'Ohio', code: 'Ohio'},
    {name: 'Washington', code: 'Washington'}
  ];

  cities1: any[] = [];
  cities2: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
