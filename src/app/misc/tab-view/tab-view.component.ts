import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent implements OnInit {

  constructor(private _messageService: MessageService) {
  }

  ngOnInit() {
  }

  onTabChange(event) {
    this._messageService.add({
      severity: 'info',
      summary: 'Tab expanded',
      detail: 'Index: ' + event.index
    });
  }
}
