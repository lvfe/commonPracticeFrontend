import { User } from '../selector';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
    LOAD_USERS = '[User] Load Users',
    ADD_USER = '[User] Add User',
    UPSERT_USER = '[User] Upsert User',
    UPDATE_USER = '[User] Update User',
    DELETE_USER = '[User] Delete User',
    CLEAR_USERS = '[User] Clear Users',
    SET_CURRENTUSER = '[User] Set CurrentUser'
}

export class LoadUsers implements Action {
    readonly type = UserActionTypes.LOAD_USERS;
    constructor(public payload: { users:User[] }){}
}

export class AddUser implements Action {
    readonly type = UserActionTypes.ADD_USER;
    constructor(public payload: {user:User}) {}
}

export class UpsertUser implements Action {
    readonly type = UserActionTypes.UPSERT_USER;
    constructor(public payload: {user: User}) {}
}

export class UpdateUser implements Action {
    readonly type = UserActionTypes.UPDATE_USER;
    constructor(public payload: {user: User}) {}
}

export class DeleteUser implements Action {
    readonly type = UserActionTypes.DELETE_USER;
    constructor(public payload: {id: string}){}
}

export class ClearUsers implements Action {
    readonly type = UserActionTypes.CLEAR_USERS;
}

export class SetCurrentUser implements Action {
    readonly type = UserActionTypes.SET_CURRENTUSER;
    constructor(public payload: {id: string}){}
}
export type UserActionUnion = 
| LoadUsers 
| AddUser
| UpsertUser
| UpdateUser
| ClearUsers
| SetCurrentUser
| DeleteUser;

