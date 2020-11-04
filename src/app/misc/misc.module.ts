import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabViewComponent } from './tab-view/tab-view.component';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MiscRoutingModule } from './misc-routing.module';
import { FlexboxLayoutComponent } from './flexbox-layout/flexbox-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

@NgModule({
  declarations: [
    TabViewComponent,
    FlexboxLayoutComponent,
    GridLayoutComponent
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
