import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  darkTheme: false,
};

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    interfaceToggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    interfaceFormLogout: (state) => {
      state.form = {};
    },
  },
});

export const {
  interfaceToggleTheme,
  interfaceFormLogout,
} = interfaceSlice.actions;

export const selectTheme = (state) => state.interface.darkTheme;

export default interfaceSlice.reducer;
