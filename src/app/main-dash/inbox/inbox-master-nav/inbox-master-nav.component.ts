import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'inbox-master-nav',
  templateUrl: './inbox-master-nav.component.html',
  styleUrls: ['./inbox-master-nav.component.css']
})
export class InboxMasterNavComponent implements OnInit {

  constructor(private router:Router) { }
  @Output() navSelect = new EventEmitter<string>();
  @Output() reset = new EventEmitter<boolean>();
  routeListener: Subscription;

  ngOnInit() {
    this.routeListener = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== "/inbox" ) {
          this.reset.emit(true);
          console.log('should reset');
        } else {
          
          this.reset.emit(false);
        }
      }
    });
  }

  onSelect(nav:string){
    this.navSelect.emit(nav);
    if(nav === 'chat')
      this.router.navigate(['inbox/chat']);
      else if(nav === 'chatbot')
        this.router.navigate(['inbox/maxpool_bot']);
        else if(nav === 'notification')
          this.router.navigate(['inbox/notifications']);
    else if(nav === 'report')
      this.router.navigate(['inbox/report']);

  }
  
  ngOnDestroy() {
    this.routeListener.unsubscribe();
  }
}