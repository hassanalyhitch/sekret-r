import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event, ActivatedRoute  } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit, OnDestroy {

  showNav:boolean = true;
  mobileToggle:boolean;
  showDefault:boolean = true;
  currentRoute:string ='inbox';

  routeUrl:string;
  windowUrl:string;
  subscription: Subscription;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.mobileToggle = false;
    this.windowUrl = window.location.pathname;

    this.subscription = this.route.url.subscribe((e)=>{
      this.routeUrl = e[0].path;
    });

    if(this.routeUrl === 'inbox'){
      
      if(this.windowUrl === '/inbox/maxpool_bot'){
        this.onNavSelected('chatbot');
        this.router.navigate(['inbox/maxpool_bot']);

      } else if(this.windowUrl === '/inbox/notifications'){
        this.onNavSelected('notification');
        this.router.navigate(['inbox/notifications']);
        
      } else if(this.windowUrl === '/inbox/report'){
        this.onNavSelected('report');
        this.router.navigate(['inbox/report']);
      }

    }

  }

  ngOnDestroy(){
    this.subscription.unsubscribe;
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