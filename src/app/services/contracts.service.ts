import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContractData } from '../models/contract.model';

@Injectable({ providedIn: 'root' })
export class ContractsService {
  selectedFolder: ContractData;

  constructor(private http: HttpClient) {}


  getContracts() {
    return this.http.get(
        'https://testapi.maxpool.de/api/v1/contracts',
        {
            headers: new HttpHeaders({
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
        });
  }
}