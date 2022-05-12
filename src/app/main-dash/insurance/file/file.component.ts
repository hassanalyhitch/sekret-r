import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FileviewComponent } from '../fileview/fileview.component';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
})
export class FileComponent implements OnInit {
  @Input() file: {
    name: string;
    fileUrl: string;
  };

  constructor(private matDialog: MatDialog) {}

  ngOnInit() {}

  openModal() {
    const dialogConfig = new MatDialogConfig();
    let passdata:string = "{fileName: '"+this.file.name+"'}";
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '75%';
    dialogConfig.width = '90%';
    dialogConfig.data = passdata;
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(FileviewComponent, dialogConfig);
  }
}
