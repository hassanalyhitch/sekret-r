import { Injectable } from "@angular/core";
import { NotificationData } from "../models/notification.model";

@Injectable({ providedIn: 'root' })
export class NotificationService{
    notifications: NotificationData[] = [
      {
        id: 0,
        title: "Check this out",
        createdAt: "07.07.2022",
        message: "This is a notice for you to notice that you are noticed"
      },
      {
        id: 1,
        title: "Tones and I",
        createdAt: "07.07.2022",
        message: "Ultratop Hit Connection "
      },
      {
        id: 2,
        title: "Dance Monkey",
        createdAt: "07.07.2022",
        message: "They say oh my God I see the way you shine;\n Take your hand, my dear, and place them both in mine;\nYou know you stopped me dead while I was passing by;\nAnd now I beg to see you dance just one more time"
      },
    ];;

    getNotifications(){
      
      return this.notifications;
    }

    getNotificationCount(){
      return this.notifications.length;
    }
}