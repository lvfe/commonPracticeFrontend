## concatMap, mergeMap, exhaustMap
concat map will work with withLatestFrom, in order to concating upstream data and state from ngrx store.
`
    addMovie$ = createEffect(
        () => 
         this.actions$.pipe(
                ofType('[Section Component] Add Movies'),
                concatMap(action=>this.movieService.getAll().pipe(
                    withLatestFrom(this.store.pipe(select(r=>r.globalState.label)), of(action)),
                    // withLatestFrom(this.movieService.getAll())
                )),
                mergeMap(([action, other, message])=> {
                    console.log('final test', action, other, message);
                    return of({ type: '[Movies API] Movies Loaded Error', error: 'final test' });
                })
        )
    );
`
## rxjs - tap
tap is a RxJS pipeable operator that returns identical Observable as source Observable and can be used to perform side effect such as logging each values emitted by source Observable. tap is declared as following.
`
public tap(nextOrObserver: Observer | function, error: function, complete: function): Observable
`
tap 返回和上一步一样的值， 用于debug. 可以在stream各个环节使用