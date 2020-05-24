import { createReducer, on, ActionReducerMap, State, MetaReducer, Action, ActionReducer } from '@ngrx/store';
import { changeLabel, changeOauthUrl, loadMovie, changeFilter, loadMovieSuccess, loadMovieFail, login } from '../action';
import { environment } from 'projects/highchartlib/src/environments/environment';
import { AppState, MovieState, GlobalState } from '../selector';
import { routerReducer } from '@ngrx/router-store';
import * as fromUser from './user.reducer';

export const initialGlobalState = {
    label: 'ua',
    oauthUrl: 'http://localhost:4002/login'
};

export const globalReducers = createReducer(initialGlobalState,
    on(changeLabel, state => ({ ...state, label: state.label.toUpperCase() })),
    on(changeOauthUrl, state => ({ ...state })));


export const initialMovies:MovieState = {
    movies: [],
    filter: "",
    error: ""
};

export const movieReduers = createReducer(initialMovies,
    on(loadMovie, state => ({ ...state })),
    on(changeFilter, state => ({ ...state })),
    on(loadMovieSuccess, (state, payload) => {
        console.log(state, payload);
        return ({...state, movies: payload.movies})
    }),
    on(login, (state, input) => {
        console.log('login reducer',input);
        return ({...state, input})
    }),
    on(loadMovieFail, (state, payload) => {
        console.log(state, payload);
        return ({...state, error: payload.error});
    }));


export const reducers: ActionReducerMap<AppState> = {
    movieState: (state: MovieState | undefined, action: Action) => movieReduers(state, action), 
    users: fromUser.reducer,
    globalState: (state: GlobalState | undefined, action: Action) => globalReducers(state, action)
};
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];