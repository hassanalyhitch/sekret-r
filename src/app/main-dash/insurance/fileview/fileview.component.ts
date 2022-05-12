import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileviewComponent implements OnInit {

  fileName:string;
  dataObj:{
    fileName:string,
  };
  constructor(@Inject(MAT_DIALOG_DATA)public data:any) { 
    this.dataObj = JSON.parse(this.data);
    
    this.fileName = this.dataObj.fileName;
  }

  ngOnInit() {
  }

}