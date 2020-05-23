import { createSelector } from '@ngrx/store';

export interface GlobalState {
    label: string
    oauthUrl: string
};

export interface MovieState {
    movies: string[],
    filter: string,
    error: string
}

export interface AppState {
    globalState: GlobalState,
    movieState: MovieState
};

export const addextra = () =>
  createSelector(
    (state, props) => state.globalState[props.id],
    (globalState, props) => globalState+props.extra
  );