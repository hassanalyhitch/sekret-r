import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css'],
})
export class InsuranceComponent implements OnInit {
  contentSelected: boolean = false;
  selectedFolder: {
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
  onActiveFolder:boolean;
  constructor() {}

  ngOnInit() {
  }

  onFolderSelect($event) {
    this.selectedFolder = $event;
    this.contentSelected = true;
  }

}
