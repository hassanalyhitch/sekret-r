import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  @Input() folder: {
    title: string;
    id: number;
    isSelected: boolean;
  };
  @Input() onActiveFolder: boolean;
  constructor() { }

  ngOnInit() {
  }

}