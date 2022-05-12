import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileviewComponent implements OnInit {

  fileName:string;
  dataObj:{
    fileName:string,
    fileUrl:string
  };
  fileurl:string = "https://docs.google.com/gview?&embedded=true&url=";
  safeUrl:SafeResourceUrl ;

  constructor(@Inject(MAT_DIALOG_DATA)public data:any, private sanitizer:DomSanitizer) { 
    this.dataObj = JSON.parse(this.data);
    
    this.fileName = this.dataObj.fileName;
    this.fileurl = this.fileurl + this.dataObj.fileUrl;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileurl)
    console.log(this.fileurl);
  }

  ngOnInit() {
  }

}