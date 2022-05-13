import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChangeFoldernameComponent } from '../change-foldername/change-foldername.component';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  @Input() folder:{
    title: string,
    id: number,
    details:{
      CustomerId01:string,
      InsuranceId01:string,
      InsuranceNumber:string,
      CompanyId:string,
      CompanyLong:string,
      CompanyShort:string,
      StartDate:string,
      EndDate:string,
      Price:string,
      Paymethod:string,
      Branch:string,
      BranchShort:string,
      CustomerName:string
    },
    files:{
      name:string,
      fileUrl:string
    }[],
    isSelected: boolean,
  };
  @Input() onActiveFolder: boolean;

  constructor(private matDialog:MatDialog) { }

  ngOnInit() {
  }
  
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // let passdata:string = '{"fileName": "'+this.file.name+'","fileUrl": "'+this.file.fileUrl+'"}';
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '80%';
    dialogConfig.width = '90%';
    dialogConfig.data = "";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ChangeFoldernameComponent, dialogConfig);
  }

}