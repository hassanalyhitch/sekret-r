import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  showNav:boolean = true;
  mobileToggle:boolean;
  showDefault:boolean = true;
  currentRoute:string ='inbox';

  constructor() { }

  ngOnInit() {
    this.mobileToggle = false;
  }

  onNavSelected(nav:string){
    console.log(nav);
    this.currentRoute = nav;
      this.mobileToggle = true;
      this.showNav = false;
      this.showDefault = false;

  }
  onReset(reset:boolean){
    if(reset){
      this.currentRoute = 'inbox';
      console.log('onReset '+this.currentRoute);
      this.showNav = true;
      this.mobileToggle = false;
      this.showDefault = true;

    }
  }
}