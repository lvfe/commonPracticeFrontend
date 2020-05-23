import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/selector';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  public allData$;
  constructor(public store: Store<any>) {
    this.allData$ = this.store.select(r=>r);
   }

  ngOnInit() {
  }

}
