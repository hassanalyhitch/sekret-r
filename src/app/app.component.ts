import { Component, VERSION } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  authenticated: boolean = true;
  navDrawerOpen:boolean = false;

  constructor(private translate: TranslateService) {
    //check if user has entered both email and password

    //mobile nav drawer global listener   
    document.addEventListener("click", (event) => {
      let elementId: string = (event.target as Element).id;
      if(!(elementId==="menu-toggle")){        
        document.getElementById("nav-bg-container").style.left = "-100%";
      } else {
        document.getElementById("nav-bg-container").style.left = "0%";
      }
    });

    //Translator
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  }
}
