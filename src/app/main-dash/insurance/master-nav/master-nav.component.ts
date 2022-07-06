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
  folders: ContractData[] = [];
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
        //loop and assign data to folders array

        if(Array.isArray(resp)){
          let index: number = 0;
          console.log(resp[0]['CustomerAmsidnr']);
          for(let item of resp){

            let folder: ContractData = {
              title: "Folder "+(index+1),
              id: index,
              details: {
                Amsidnr: item['Amsidnr'],
                CustomerAmsidnr:  item['CustomerAmsidnr'],
                InsuranceId:  item['Contractnumber'],
                ContractNumber:  item['Contractnumber'],
                Company:  item['Company'],
                StartDate:  item['Begin'],
                EndDate:  '',
                YearlyPayment:  item['YearlyPayment'],
                Paymethod:  item['PaymentMethod'],
                Branch:  item['Branch'],
                Risk:  item['Risk'],
                docs: item['docs']
              },
              isSelected: false
            };
            this.folders.push(folder);
            index++;
          }

       } else {
        //invalid token

       }

      },
      error: (e) => {
        console.log(e);
        
      },
      complete: () => {
        // console.info('complete')
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
