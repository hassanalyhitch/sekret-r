import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
  userInput = {};
  buttonDisabled = true;

  username = '';
  password = '';
  @Output('auth') authenticated = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  validateUser(){
    //... after api response 

    this.authenticated.emit(true);
    
    return this.authenticated;
  }
}
