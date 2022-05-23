import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  navSelected:boolean = false;
  currentRoute:string ='chat';

  constructor() { }

  ngOnInit() {
  }

  onNavSelected(nav:string){
    this.currentRoute = nav;
      this.navSelected = true;
  }

}