import {createReducer} from '@reduxjs/toolkit';
import userActions from '../actions/user';

interface UserState {
  data: {
    [key: string]: User;
  };
}

const initialState: UserState = {data: {}};
const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(userActions.addUser, (state, action) => {
      // "mutate" the array by calling push()
      state.data[action.payload.id] = action.payload;
    })
});

export default userReducer;
