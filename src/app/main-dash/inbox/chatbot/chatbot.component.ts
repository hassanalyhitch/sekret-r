import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContentManager, ScriptRunnerImpl } from 'hatool';
import { mergeMap } from 'rxjs/operators';

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
    
    runner.debug = true;
    // runner.timeout = 500;
    runner.run(
      'assets/maxpool-bot-script.json',
      0,
      {
        get_chuck: async () => {
          return this.http.get('https://api.chucknorris.io/jokes/random/').pipe(
            mergeMap((joke: any) => joke.value),
          );
        }
      },
      (key, value) => { console.log('SETTING', key, '<==', value); },
      {},
    ).subscribe(() => { console.log('done!'); });
  }

}