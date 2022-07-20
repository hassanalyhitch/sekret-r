import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ContractData } from '../../../models/contract.model';
import { ContractsService } from '../../../services/contracts.service';
import { ChangeFoldernameComponent } from '../change-foldername/change-foldername.component';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  folder:ContractData;
  hrTitle: string;

  constructor(private matDialog:MatDialog, private translate:TranslateService, private contractService: ContractsService) {
    this.hrTitle = this.translate.instant('insurance.detail.hrtitle');
   }

  ngOnInit() {

    this.folder = this.contractService.selectedFolder;
    const wholeDocTemplate = document.getElementsByClassName('current-detail').item(0) as HTMLElement | null;

    if (wholeDocTemplate != null) {
      document.getElementById("docu-hr").setAttribute('data-content', this.hrTitle);
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