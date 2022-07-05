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
import { ContractData } from '../../../models/contract.model';
import { ContractsService } from '../../../services/contracts.service';

@Component({
  selector: 'app-master-nav',
  templateUrl: './master-nav.component.html',
  styleUrls: ['./master-nav.component.css'],
})
export class MasterNavComponent implements OnInit {
  folders: ContractData[] = [
    {
      title: 'Folder 1',
      id: 1,
      details: {
        CustomerId01: 'CustomerId01',
        InsuranceId01: 'InsuranceId01',
        InsuranceNumber: '520-963321/8',
        CompanyId: 'AXA-ALLG',
        CompanyLong: 'Axa Allgemeine Versicherung',
        CompanyShort: 'Axa',
        StartDate: '2021-01-01',
        EndDate: '2023-01-01',
        Price: '50.43',
        Paymethod: 'Monatlich',
        Branch: 'Haftpflichtversicherung',
        BranchShort: 'Haftpflicht',
        CustomerName: 'Zak, Andreas',
      },
      files: [
        {
          name: 'ppt sample file.ppt',
          fileUrl:
            'https://www.adobe.com/support/ovation/ts/docs/ovation_test_show.ppt',
        },
        {
          name: 'xls sample file.xls',
          fileUrl:
            'https://dornsife.usc.edu/assets/sites/298/docs/ir211wk12sample.xls',
        },
      ],
      isSelected: false,
    },
    {
      title: 'Folder 2',
      id: 2,
      details: {
        CustomerId01: 'CustomerId01',
        InsuranceId01: 'InsuranceId02',
        InsuranceNumber: '445-44321MAX',
        CompanyId: 'PHOES-ALLG',
        CompanyLong: 'Phoenix Schutzgemeinschaft',
        CompanyShort: 'Phoenix',
        StartDate: '2020-06-01',
        EndDate: '2023-06-01',
        Price: '421.35',
        Paymethod: 'J&auml;hrlich',
        Branch: 'Unfallversicherung',
        BranchShort: 'Unfall',
        CustomerName: 'Zak, Andreas',
      },
      files: [
      ],
      isSelected: false,
    },
  ];
  // masternavTitle: string = 'Insurance Folders';

  @Output('selection') selectedFolder = new EventEmitter<{}>();
  @Output() reset = new EventEmitter<boolean>();
  routeListener: Subscription;

  constructor(private route: Router, private contractService: ContractsService) {}

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
    
    this.contractService.getContracts().subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (e) => {
        console.log(e);
        
      },
      complete: () => {
        console.info('complete')
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
