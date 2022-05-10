import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css'],
})
export class MainDashComponent implements OnInit {
  // contentSelected: boolean = false;
  navDrawerOpen:boolean = false;
  constructor() {}

  ngOnInit() {}

  navigationDrawerToggle(){
    this.navDrawerOpen = !this.navDrawerOpen;
    if(this.navDrawerOpen){
      
    }
  }
}
