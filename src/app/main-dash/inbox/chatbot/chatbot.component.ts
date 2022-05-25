import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContentManager, ScriptRunnerImpl } from 'hatool';
import { map} from 'rxjs/operators';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  content = new ContentManager();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
    const runner = new ScriptRunnerImpl(this.http, this.content, 'en');
    // runner.registerCustomComponents([
    //   {
    //     keyword: 'img',
    //     cls: ''
    //   }
    // ]);
    runner.debug = true;
    runner.timeout = 400;
    runner.run(
      'assets/maxpool-bot-script.json',
      0,
      {
        get_chuck: async () => {
          const jokeObj = this.http.get('https://api.chucknorris.io/jokes/random/').pipe(
            map((joke: any) => joke.value),
          );
          return await lastValueFrom(jokeObj);
        }
      },
      (key, value) => { console.log('SETTING', key, '<==', value); },
      {},
    ).subscribe(() => { console.log('done!'); });
  }

}