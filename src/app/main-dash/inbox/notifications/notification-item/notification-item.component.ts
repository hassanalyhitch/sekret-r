import { Component, Input, OnInit } from '@angular/core';
import { NotificationData } from '../../../../models/notification.model';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css']
})
export class NotificationItemComponent implements OnInit {

  @Input() notif: NotificationData;
  constructor() { }

  ngOnInit() {
  }

}