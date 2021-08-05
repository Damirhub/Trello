import {createSlice} from '@reduxjs/toolkit';

const initialState = null;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSetUser: (state, action) => action.payload,
    userLogout: () => initialState,
  },
});

export const {userSetUser, userLogout} = userSlice.actions;

export const selectUser = (state) => state.user;


export default userSlice.reducer;


