import {configureStore} from '@reduxjs/toolkit';
import {useSelector } from 'react-redux';
import {combineReducers } from 'redux';
import userReducer from './reducer/user';


const reducers = combineReducers( { users:userReducer } );
export const store = configureStore({
  reducer: reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export function useAppSelector<TResult = unknown>(
  selector: (state: RootState) => TResult,
): TResult {
  return useSelector(selector);
}


