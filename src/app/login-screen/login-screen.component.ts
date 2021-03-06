import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  errorMessage = null;

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  validateUser(formData: LoginData) {
      
    this.loginService.login(formData).subscribe({
      next: (resp) => {
        
        if(resp.hasOwnProperty("token")){
          this.authenticated.emit(true);

          //reset route
          // this.router.navigateByUrl('/insurance');
        }
      },
      error: (e) => {
        console.log(e);
        if(e.hasOwnProperty("name") && e.hasOwnProperty("statusText")){
          this.errorMessage = " "+e.name+" -> "+e.statusText;
          console.log( 'display this error => '+this.errorMessage);
        }

        if(e.error.hasOwnProperty('msg')){
          this.errorMessage = e.error.msg;
          console.log( 'display this error => '+this.errorMessage);
        } else if(e.error.hasOwnProperty('message')){
          this.errorMessage = e.error.msg;
          console.log( 'display this error => '+this.errorMessage);

        }
        this.submitted = false;
      },
      complete: () => {
        // console.info('complete')
      }
    });
  }

  onSubmit(formData: LoginData) {
    formData.loginType = 'customer';
    this.submitted = true;
    this.errorMessage = null;
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
