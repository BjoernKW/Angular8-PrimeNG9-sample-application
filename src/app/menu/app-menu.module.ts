import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { SharedModule } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    SharedModule
  ],
  exports: [
    MainMenuComponent
  ],
  entryComponents: [
    MainMenuComponent
  ]
})
export class AppMenuModule { }
