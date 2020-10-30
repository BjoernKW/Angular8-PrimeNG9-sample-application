import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() icon: string;
  @Input() label: string;
  @Input() value: string;
  @Input() colour: string;

  constructor() {
  }

  ngOnInit() {
  }

}
