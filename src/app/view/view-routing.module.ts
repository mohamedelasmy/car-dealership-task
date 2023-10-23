import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLeadComponent } from './Pages/list-lead/list-lead.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./Pages/list-lead/list-lead.module').then(m => m.ListLeadModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
