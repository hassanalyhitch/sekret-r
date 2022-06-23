import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginData } from "../models/login.model";

@Injectable({providedIn: 'root'})
export class LoginService {

  constructor(private http:HttpClient){}

  login(data: LoginData){

    return this.http
      .post('https://testapi.maxpool.de/api/v1/login', data);
  }
}