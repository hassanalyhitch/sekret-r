import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}