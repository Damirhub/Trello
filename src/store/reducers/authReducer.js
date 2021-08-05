import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  // loading: true,
  isLoggedIn: false,
  trello_key: '',
  server_token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // authStart: (state) => {
    //   state.loading = true;
    // },
    authSuccess: (state, action) => {
      state.trello_key = action.payload.trello_key;
      state.server_token = action.payload.server_token;
      state.isLoggedIn = true;
      
      // state.accessToken = action.payload.access_token;
    },

    // authFail: (state, action) => {
    //   state.loading = false;
    //   state.accessToken = null;
    //   state.error = action.payload;
    // },
    authLogout: (state) => {
      state.server_token = '';
      state.trello_key = '';
      state.isLoggedIn = false;
    },
  },
});

export const {authStart, authSuccess, authFail, authLogout} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// export const selectIsLoggedIn = (state) => state.auth;

export default authSlice.reducer;

