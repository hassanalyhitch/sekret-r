import { Injectable } from "@angular/core";
import { NotificationData } from "../models/notification.model";

@Injectable({ providedIn: 'root' })
export class NotificationService{
    notifications: NotificationData[] = [
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
    ];;

    getNotifications(){
      
      return this.notifications;
    }

    getNotificationCount(){
      return this.notifications.length;
    }
}