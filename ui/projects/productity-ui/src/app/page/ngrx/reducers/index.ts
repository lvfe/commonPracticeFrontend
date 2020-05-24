import { createReducer, on, ActionReducerMap, Action } from '@ngrx/store';
import { changeTitle } from '../actions';
import { PageState, AppState } from '../selectors';

export const initialPage = {
    title: 'first title',
    content: ''
};

const pageReducer = createReducer(initialPage,
    on(changeTitle, state=>({...state})));

export function reducer(state:PageState, action){
    return pageReducer(state, action);
};

export const reducers: ActionReducerMap<AppState> = {
    pageState: (state: PageState, action: any) => reducer(state, action)
};


