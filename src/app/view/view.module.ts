import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListLeadModule } from './Pages/list-lead/list-lead.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
    ListLeadModule
  ]
})
export class ViewModule { }
