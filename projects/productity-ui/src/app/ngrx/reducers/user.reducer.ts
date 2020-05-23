import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../selector';
import { UserActionUnion, UserActionTypes } from '../action/user.actions';


export interface  State extends EntityState<User> {
    selectedUserId: number | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
    selectedUserId: null
});

export function reducer(state = initialState, action: UserActionUnion):State {
    switch(action.type){
        case UserActionTypes.ADD_USER: {
            return adapter.addOne(action.payload.user, state);
        }
        case UserActionTypes.DELETE_USER: {
            return adapter.removeOne(action.payload.id, state);
        }
        case UserActionTypes.LOAD_USERS: {
            return adapter.addAll(action.payload.users, state);
        }
        case UserActionTypes.UPDATE_USER: {
            // return adapter.updateOne(action.payload.user, state);
            return null;
        }
        case UserActionTypes.UPSERT_USER: {
            return adapter.upsertOne(action.payload.user, state);
        }
        default: {
            return state;
        }
    }
}

export const getSelectedUserId = (state: State) => state.selectedUserId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectedUserIds = selectIds;
export const selectUserEntities = selectEntities;
export const selectAllUsers = selectAll;
export const selectUserTotal = selectTotal;

