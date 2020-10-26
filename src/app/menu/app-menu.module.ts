import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMenuRoutingModule } from './app-menu-routing.module';
import { AppMenuComponent } from './app-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SharedModule } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    AppMenuComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    AppMenuRoutingModule,
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
