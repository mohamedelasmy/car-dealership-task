import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../list-lead.component';
import { GenericService } from 'src/app/core/services/generic.service';
import { API } from 'src/app/core/services/ip.service';

@Component({
  selector: 'app-update-lead',
  templateUrl: './update-lead.component.html',
  styleUrls: ['./update-lead.component.scss']
})
export class UpdateLeadComponent {
  show: number = 5; // Use this value to control how many items will be appear per Selecton Criteria and Operations
  items: any = [];
  page: number = 1;
  newDuplicateList: any = [];

  constructor(public dialogRef: MatDialogRef<UpdateLeadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private genericService: GenericService) { }
  ngOnInit() {
    this.newDuplicateList = this.data.lead.duplicate_of;
    this.getLead(this.data.lead.lead_id);
  }

  getLead(leadId: string) {
    this.genericService.getMethod(API(leadId).getLeadById).subscribe((res: any) => {
      res.forEach((element: any) => {
        this.data.list.filter(item => item.lead_id == element).forEach(item => {
          if(this.data.lead.duplicate_of.includes(item.lead_id)) {
            item.checked = true
          } else {
            item.checked = false;
          }
          this.items.push(item);
        });
      });
    })
  }

  submit() {
    this.data.lead.duplicate_of = this.newDuplicateList;
    this.genericService.putMethod(API(this.data.lead.lead_id).updateLead, this.data.lead).subscribe((res: any) => {
      this.dialogRef.close(true);
      console.log(res);
    })
  }

  changeList(lead: any) {
    console.log(lead.checked);
    if (lead.checked) {
      this.newDuplicateList.push(lead.lead_id);
    } else {
      let index = this.newDuplicateList.findIndex((i:any) => i === lead.lead_id);
      if (index !== -1) {
        this.newDuplicateList.splice(index, 1);
      }
    }
    console.log(this.newDuplicateList);
  }
}
