import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, addextra } from './ngrx/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'productity-ui';
  public  allData$;
  constructor(public store:Store<AppState>){
    this.allData$ = this.store.select(addextra(), {id:'oauthUrl', extra: 'sss'});
  }
}
