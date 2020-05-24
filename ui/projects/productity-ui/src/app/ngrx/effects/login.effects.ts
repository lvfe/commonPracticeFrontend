import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { exhaustMap, catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MockService } from '../../service/mock.service';
import { login } from '../action';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class LoginEffects {
    login$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(login),
                mergeMap(
                    (action) => {
                        console.log(action);
                        return this.mockService.login(action.input)
                        .pipe(
                            map(movies => ({ type: '[Movies API] Movies Loaded Success', movies: movies })),
                            catchError((error: HttpErrorResponse) => of({ type: '[Movies API] Movies Loaded Error', error: error.message }))
                        )
                    }
                )
            )
        }

    );


    constructor(public actions$: Actions, public mockService: MockService ) { }
}