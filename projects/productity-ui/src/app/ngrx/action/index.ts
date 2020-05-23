import { createAction, props } from '@ngrx/store';

export const loadMovie = createAction('[Section Component] Load Movies');
export const addMovie = createAction('[Section Component] Add Movies');
export const changeFilter = createAction('[Section Component] Change Filter');
export const changeOauthUrl = createAction('[Page Component] Change OauthUrl');
export const changeLabel = createAction('[Page component] Label Change');

export const loadMovieSuccess = createAction('[Movies API] Movies Loaded Success', props<{movies: any[]}>());

export const loadMovieFail = createAction('[Movies API] Movies Loaded Error', props<{error: string}>());

export const login = createAction('[Login Page] Login', props<{ input: string }>() );