import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginData } from '../models/login.model';
import { LoginService } from '../services/login.service';

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
  submitted: boolean = false;
  @Output('auth') authenticated = new EventEmitter<boolean>();
  @Output() lang = new EventEmitter<string>();

  constructor(private http: HttpClient, private loginService: LoginService) {}

  ngOnInit() {}

  validateUser(formData: LoginData) {
    //... 
      
    this.loginService.login(formData).subscribe({
      next: (resp) => {
        console.log(resp)
      },
      error: (e) => {
        console.error(e)
      },
      complete: () => {
        console.info('complete')
      }
    });
    this.authenticated.emit(false);
  }

  onSubmit(formData: LoginData) {
    formData.loginType = 'customer';
    this.submitted = true;
    this.validateUser(formData);
  }

  changeLang(e) {
    if (e.target.checked) {
      this.lang.emit('de');
    } else {
      this.lang.emit('en');
    }
  }
}
