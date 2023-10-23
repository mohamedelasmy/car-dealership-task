import { Component, ViewChild } from '@angular/core';
import { GenericService } from '../../../core/services/generic.service';
import { API } from '../../../core/services/ip.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateLeadComponent } from './update-lead/update-lead.component';
import { Lead } from 'src/app/core/Interfaces/lead';
export interface DialogData {
  lead: any;
  list: Lead[];
}
@Component({
  selector: 'app-list-lead',
  templateUrl: './list-lead.component.html',
  styleUrls: ['./list-lead.component.scss']
})
export class ListLeadComponent {
  show: number = 5; // Use this value to control how many items will be appear per Selecton Criteria and Operations
  items: Lead[] = [];
  page: number = 1;

  constructor(
    private genericService: GenericService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.genericService.getMethod(API().getListOfLeads).subscribe((data:any) => {
      console.log(data); // JSON data will be logged here
      this.items = data;


    });
  }

  updateLead(lead: any) {
    const dialogRef = this.dialog.open(UpdateLeadComponent,{data: {lead : lead, list: this.items}});
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.loadData();
    });

  }
}
