import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabViewComponent } from './tab-view/tab-view.component';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MiscRoutingModule } from './misc-routing.module';

@NgModule({
  declarations: [
    TabViewComponent
  ],
  imports: [
    CommonModule,
    MiscRoutingModule,
    TabViewModule,
    ToastModule
  ],
  providers: [
    MessageService
  ]
})
export class MiscModule { }
