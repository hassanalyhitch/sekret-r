import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications:{id: number, message: string}[];

  constructor() { }

  ngOnInit() {
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
  }

}