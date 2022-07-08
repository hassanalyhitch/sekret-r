import { Injectable } from "@angular/core";
import { NotificationData } from "../models/notification.model";

@Injectable({ providedIn: 'root' })
export class NotificationService{
    notifications: NotificationData[];

    getNotifications(){
      this.notifications = [
        {
          id: 0,
          message: "This is a notice for you to notice that you are noticed"
        },
        {
          id: 1,
          message: "This is a notice for you to notice that you are noticed"
        },
        {
          id: 2,
          message: "This is a notice for you to notice that you are noticed"
        },
      ];
      return this.notifications;
    }
}