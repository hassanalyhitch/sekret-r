import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { ContractData } from '../../models/contract.model';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css'],
})
export class InsuranceComponent implements OnInit, OnDestroy {
  contentSelected: boolean = false;
  selectedFolder: ContractData;
  onActiveFolder:boolean;

  constructor() {}

  ngOnInit() {
    
  }
  ngOnDestroy(){
  }

  onFolderSelect($event) {
    this.selectedFolder = $event;
    this.contentSelected = true;
  }

}
