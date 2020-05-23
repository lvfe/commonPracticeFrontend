import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

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
  movieState: MovieState,
  users: fromUser.State;
};

export const addextra = () =>
  createSelector(
    (state, props) => state.globalState[props.id],
    (globalState, props) => globalState + props.extra
  );

export interface User {
  id: string;
  name: string;
}

export const selectUserState = createFeatureSelector<fromUser.State>('users');

export const selectUserIds = createSelector(
  selectUserState,
  fromUser.selectedUserIds
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
); 
export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
);
export const selectUserTotal = createSelector(
  selectUserState,
  fromUser.selectUserTotal
);
export const selectCurrentUserId = createSelector(
  selectUserState,
  fromUser.getSelectedUserId
);
export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);