import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: 'misc', loadChildren: () => import('./misc/misc.module').then(m => m.MiscModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
