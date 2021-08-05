import {createSlice} from '@reduxjs/toolkit';

const initialState = null;

export const userSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    setListsSet: (state, action) => action.payload,
  },
});

export const {setListsSet} = userSlice.actions;

export const selectLists = (state) => state.lists

export default userSlice.reducer;
