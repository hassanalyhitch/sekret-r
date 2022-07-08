import { Component, Input, OnInit } from '@angular/core';
import { NotificationData } from '../../../models/notification.model';
import { NotificationService } from '../../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

 @Input() notifications:NotificationData [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notifications = this.notificationService.getNotifications();
  }

}