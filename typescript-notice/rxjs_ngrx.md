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

## ngrx - ngrx/entity
https://github.com/ngrx/platform/blob/master/docs/entity/adapter.md
user adaptor to handle CRUD operation.
this package is intended to avoid duplicate operations. 
In order to increase search spped, data is in the form of 
(
    entities:
        0.5728511472039879: {id: "0.5728511472039879", name: "connie0.8536503039587475"}
        0.9240689916806744: {id: "0.9240689916806744", name: "connie0.6455634670433734"}
        0.9422826821466104: {id: "0.9422826821466104", name: "connie0.581857286176618"}
    ids: Array(3)
        0: "0.5728511472039879"
        1: "0.9422826821466104"
        2: "0.9240689916806744"
    selectedUserId: null
)

set curent user = entities[id]
`
interface EntityState<V> {
  ids: string[] | number[];
  entities: { [id: string | id: number]: V };
}
`