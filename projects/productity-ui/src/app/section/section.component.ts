import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeLabel, loadMovie, login, addMovie } from '../ngrx/action';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  public allData$;
  public input;
  constructor(public store: Store<any>) { 
    this.allData$ = this.store.select(r=>r);
    
    
  }

  ngOnInit() {
  }
  
  handleClick(){
    this.store.dispatch(changeLabel());
  }

  loadMovie(){
    this.store.dispatch(loadMovie());
  }
  loadInput() {
    this.store.dispatch(login({input: this.input}));
  }
  addMovie(){
    this.store.dispatch(addMovie());
  }
  keyup($event){
    console.log(123, $event.target.value);
    this.input = $event.target.value;
  }
}
