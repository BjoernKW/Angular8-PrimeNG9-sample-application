import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) },
  { path: 'menu', loadChildren: () => import('./menu/app-menu.module').then(m => m.AppMenuModule) },
  { path: 'misc', loadChildren: () => import('./misc/misc.module').then(m => m.MiscModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
