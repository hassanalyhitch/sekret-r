import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit {

  @ViewChild('startdate', { static: true }) startDate: ElementRef;
  @ViewChild('enddate', { static: true }) endDate: ElementRef;
  @ViewChild('startDateLabel', { static: true }) startDateLabel: ElementRef;
  @ViewChild('endDateLabel', { static: true }) endDateLabel: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onStartDateClicked(){
    this.startDate.nativeElement.style.setProperty('color', '#212121');
    this.startDateLabel.nativeElement.style.setProperty('color', '#009ee2');
  }
  onEndDateClicked(){
    this.endDate.nativeElement.style.setProperty('color', '#212121');
    this.endDateLabel.nativeElement.style.setProperty('color', '#009ee2');
  }

}