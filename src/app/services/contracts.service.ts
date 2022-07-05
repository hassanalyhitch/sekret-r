import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContractsService {
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