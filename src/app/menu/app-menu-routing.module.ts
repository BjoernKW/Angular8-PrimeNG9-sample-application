import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppMenuComponent } from './app-menu.component';

const routes: Routes = [{ path: '', component: AppMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMenuRoutingModule { }
