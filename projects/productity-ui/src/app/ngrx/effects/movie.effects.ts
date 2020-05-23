import { Injectable } from '@angular/core';
import { MockService } from '../../service/mock.service';
import { createEffect, ofType, Actions, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap, withLatestFrom, tap, exhaustMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { AppState } from '../selector';

@Injectable()
export class MovieEffects {
    init$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            /** An EMPTY observable only emits completion. Replace with your own observable stream */
            tap(action => {
                console.log('on init', action);
            }),
            exhaustMap(
                (action) => this.movieService.getAll()
                    .pipe(
                        map(movies => ({ type: '[Movies API] Movies Loaded Success', movies: movies })),
                        catchError((error: HttpErrorResponse) => of({ type: '[Movies API] Movies Loaded Error', error: error.message }))
                    )
             )
        ), { dispatch: true });
   

    // logActions$ = createEffect(() =>
    //     this.actions$.pipe(
    //         tap(action => console.log(action))
    //     ), { dispatch: false });
    loadMovie$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[Section Component] Load Movies'),
            mergeMap(
                () => this.movieService.getAll()
                    .pipe(
                        map(movies => ({ type: '[Movies API] Movies Loaded Success', movies: movies })),
                        catchError((error: HttpErrorResponse) => of({ type: '[Movies API] Movies Loaded Error', error: error.message }))
                    )
            )
        );
    });
    addMovie$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType('[Section Component] Add Movies'),
                concatMap(action => this.movieService.getAll().pipe(
                    withLatestFrom(this.store.pipe(select(r => r.globalState.label)), of(action)),
                    // withLatestFrom(this.movieService.getAll())
                )),
                mergeMap(([action, other, message]) => {
                    console.log('final test', action, other, message);
                    return of({ type: '[Movies API] Movies Loaded Error', error: 'final test' });
                })
            )
    );



    constructor(private actions$: Actions, private store: Store<AppState>, private movieService: MockService) { }
}