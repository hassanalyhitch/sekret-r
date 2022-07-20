import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { ContractData } from '../../models/contract.model';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css'],
})
export class InsuranceComponent implements OnInit, OnDestroy {
  contentSelected: boolean = false;
  selectedFolder: ContractData;
  onActiveFolder:boolean;

  constructor(private router: Router, private contractService: ContractsService) {}

  ngOnInit() {
    
  }
  ngOnDestroy(){
  }

  onFolderSelect($event) {
    this.contentSelected = true;
    this.router.navigate(['insurance/folder']);
  }

}
