import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectAllUsers, User, selectCurrentUserId, selectCurrentUser } from '../ngrx/selector';
import { AddUser, DeleteUser, SetCurrentUser } from '../ngrx/action/user.actions';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  public allData$;
  public users$;
  public currentUser$;

  constructor(public store: Store<any>) {
    this.allData$ = this.store.select(r=>r);
    this.users$ = this.store.select(selectAllUsers);
    this.currentUser$ = this.store.select(selectCurrentUser);
   }

  ngOnInit() {
  }
  addUser(){
    const user = {'id': Math.random()+'', name: 'connie'+Math.random()}
    this.store.dispatch(new AddUser({'user': user}));
  }
  removeUser(user:User){
    this.store.dispatch(new DeleteUser({id: user.id}));
  }
  setCurrent(user: User) {
    this.store.dispatch(new SetCurrentUser({id: user.id}));
  }
}
