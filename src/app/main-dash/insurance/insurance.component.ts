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
    title: string;
    id: number;
    isSelected: boolean;
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
