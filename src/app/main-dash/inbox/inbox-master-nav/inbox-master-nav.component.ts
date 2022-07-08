import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../../services/notifications.service';

@Component({
  selector: 'inbox-master-nav',
  templateUrl: './inbox-master-nav.component.html',
  styleUrls: ['./inbox-master-nav.component.css']
})
export class InboxMasterNavComponent implements OnInit {

  constructor(private router:Router, private notificationService: NotificationService) { }
  @Output() navSelect = new EventEmitter<string>();
  @Output() reset = new EventEmitter<boolean>();
  inboxNav:string ;
  routeListener: Subscription;
  numberOfNotif: number;

  ngOnInit() {
    this.activateInboxNav();
    this.routeListener = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.activateInboxNav();
        if (event.url !== "/inbox" ) {
          this.reset.emit(false);
        } else {
          
          this.reset.emit(true);
          console.log(event.url);
        }
      }
    });
    this.numberOfNotif = this.notificationService.getNotificationCount();
  }

  activateInboxNav(){

    switch(window.location.pathname){
      case '/inbox/maxpool_bot': {
        this.inboxNav = 'chatbot';
        break;
      }
      case '/inbox/report': {
        this.inboxNav = 'report';
        break;
      }
      case '/inbox/notification': {
        this.inboxNav = 'notification';
        break;
      }
      default:{
        this.inboxNav = 'chat';
        break;       
      }
    }
  }
  onSelect(nav:string){
    this.navSelect.emit(nav);
    this.inboxNav = nav;
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