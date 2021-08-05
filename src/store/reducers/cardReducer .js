import {createSlice} from '@reduxjs/toolkit';

const initialState = null;

export const userSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCardId: (state, action) => action.payload,
    // userLogout: () => initialState,
  },
});

export const {setCardId} = userSlice.actions;

export const selectCardId = (state) => state.card

export default userSlice.reducer;
