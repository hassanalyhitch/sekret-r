import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-master-nav',
  templateUrl: './master-nav.component.html',
  styleUrls: ['./master-nav.component.css'],
})
export class MasterNavComponent implements OnInit {
  folders: {
    title: string;
    id: number;
    isSelected: boolean;
  }[] = [
    { title: 'Folder 1', id: 1, isSelected: false },
    { title: 'Folder 2', id: 2, isSelected: false },
    { title: 'Folder 3', id: 3, isSelected: false },
    { title: 'Folder 4', id: 4, isSelected: false },
    { title: 'Folder 5', id: 5, isSelected: false },
    { title: 'Folder 6', id: 6, isSelected: false },
  ];
  masternavTitle: string = 'Insurance Folders';

  @Output('selection') selectedFolder = new EventEmitter<{}>();
  @Output() reset = new EventEmitter<boolean>();
  routeListener: Subscription;

  constructor(private route: Router) {}

  ngOnInit() {
    this.routeListener = this.route.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (!event.url.includes('folder')) {
          for (let i = 0; i < this.folders.length; i++) {
            this.folders[i].isSelected = false;
          }
          this.reset.emit(true);
          console.log('back home');
        }
      }
    });
  }

  selectEventListener(event: number) {
    for (let i = 0; i < this.folders.length; i++) {
      if (this.folders[i].id == event) {
        this.folders[i].isSelected = true;
        this.selectedFolder.emit(this.folders[i]);
      } else {
        this.folders[i].isSelected = false;
      }
    }
  }

  ngOnDestroy() {
    this.routeListener.unsubscribe();
  }
}
