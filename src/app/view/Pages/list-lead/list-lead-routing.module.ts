import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLeadComponent } from './list-lead.component';

const routes: Routes = [
     { path: '', component: ListLeadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListLeadRoutingModule { }
