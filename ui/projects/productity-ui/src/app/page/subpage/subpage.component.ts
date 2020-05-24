import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubpageComponent implements OnInit {
  public page$;
  public title = '';
  constructor(public store: Store<any>) {
    this.page$ = this.store.select('page');
    this.page$.subscribe(arg =>{
      this.title = arg.title
    });
    
   }

  ngOnInit() {
  }
  handleChange($event){
    console.log(123, $event.target.value);
  }
}
