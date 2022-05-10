import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-bottomsheet',
  templateUrl: './insurance-bottomsheet.component.html',
  styleUrls: ['./insurance-bottomsheet.component.css']
})
export class InsuranceBottomsheetComponent implements OnInit {
  contentSelected: boolean = false;
  bottomsheetToggle:boolean = false;
  selectedFolder: {
    title: string;
    id: number;
    isSelected: boolean;
  };
  constructor() {}

  ngOnInit() {}

  onFolderSelect($event) {
    this.selectedFolder = $event;
    this.contentSelected = true;
  }

  onToggle(){
        this.bottomsheetToggle = !this.bottomsheetToggle;
      if(this.bottomsheetToggle){
        
      }
  }
}