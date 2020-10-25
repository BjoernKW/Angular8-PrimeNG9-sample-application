import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMenuRoutingModule } from './app-menu-routing.module';
import { AppMenuComponent } from './app-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppMenuComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    AppMenuRoutingModule,
    MenubarModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    MainMenuComponent
  ],
  entryComponents: [
    MainMenuComponent
  ]
})
export class AppMenuModule { }
