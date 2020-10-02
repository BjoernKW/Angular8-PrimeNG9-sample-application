import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscRoutingModule } from './misc-routing.module';
import { MiscComponent } from './misc.component';


@NgModule({
  declarations: [MiscComponent],
  imports: [
    CommonModule,
    MiscRoutingModule
  ]
})
export class MiscModule { }
