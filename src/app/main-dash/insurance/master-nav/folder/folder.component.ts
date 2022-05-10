import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent implements OnInit {
  @Input() folder: {
    title: string;
    id: number;
    isSelected: boolean;
  };
  @Output() selectEvent = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit() {}

  onSelect(event: number) {
    this.selectEvent.emit(event);
    this.router.navigate(['insurance/folder']);
  }
}
