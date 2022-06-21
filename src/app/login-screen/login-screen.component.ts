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
  submitted:boolean = false;
  @Output('auth') authenticated = new EventEmitter<boolean>();
  @Output() lang = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  validateUser(){
    //... after api response 

    this.authenticated.emit(true);
    
    return this.authenticated;
  }

  onSubmit(e){
    console.log(e);
    this.submitted = true;
    this.validateUser();
  }

  changeLang(e){
    if(e.target.checked){
      this.lang.emit('de');
    } else {
      this.lang.emit('en');
    }
  }
}
