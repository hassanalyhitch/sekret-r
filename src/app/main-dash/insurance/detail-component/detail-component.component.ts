import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
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
  hrTitle: string;

  constructor(private matDialog:MatDialog, private translate:TranslateService) {
    this.hrTitle = this.translate.instant('nav.broker');
   }

  ngOnInit() {

    const wholeDocTemplate = document.getElementsByClassName('current-detail').item(0) as HTMLElement | null;

    if (wholeDocTemplate != null) {
      document.getElementById("docu-hr").setAttribute('data-content', this.hrTitle);

      var content = window.getComputedStyle(
        document.querySelector('hr'), ':after'
      ).getPropertyValue('content');

      alert(content);
    } 

  }
  
  openModal() {
    const dialogConfig = new MatDialogConfig();
    let passdata:string = '{"folderName": "'+this.folder.title+'","folderId": "'+this.folder.id+'"}';
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '75%';
    dialogConfig.width = '75%';
    dialogConfig.data = passdata;
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ChangeFoldernameComponent, dialogConfig);
  }

}