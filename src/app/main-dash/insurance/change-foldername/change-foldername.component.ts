import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-change-foldername',
  templateUrl: './change-foldername.component.html',
  styleUrls: ['./change-foldername.component.css']
})
export class ChangeFoldernameComponent implements OnInit {

  currentName:string ;
  newFolderName:string ;
  dataObj:{
    folderName:string,
    folderid:string
  };

  constructor(@Inject(MAT_DIALOG_DATA)public data:any) {
    
    this.dataObj = JSON.parse(this.data);
    this.currentName = this.dataObj.folderName;

  }

  ngOnInit() {
  }

}