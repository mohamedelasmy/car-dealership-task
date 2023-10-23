import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListLeadRoutingModule } from './list-lead-routing.module';
import { UpdateLeadComponent } from './update-lead/update-lead.component';
import { ListLeadComponent } from './list-lead.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateLeadComponent,
    ListLeadComponent
  ],
  imports: [
    CommonModule,
    ListLeadRoutingModule,
    NgxPaginationModule,
    MatDialogModule,
    FormsModule
  ]
})
export class ListLeadModule { }
