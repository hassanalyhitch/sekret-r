import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  message: string;
  screenHeight;
  screenWidth;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    let calculatedHeight: string = String(0.8 * this.screenHeight) + 'px';
    document.querySelector<HTMLElement>('.messages').style.height =
      calculatedHeight;
    console.log(this.screenHeight, calculatedHeight, this.screenWidth);
  }

  constructor() {}

  ngOnInit() {
    this.getScreenSize();
  }
}
