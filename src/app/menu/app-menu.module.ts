import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { AppMenuRoutingModule } from './app-menu-routing.module';
import { AppMenuComponent } from './app-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  declarations: [
    AppMenuComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    AppMenuRoutingModule,
    MenuModule
  ],
  exports: [
    MainMenuComponent
  ],
  entryComponents: [
    MainMenuComponent
  ]
})
export class AppMenuModule { }
