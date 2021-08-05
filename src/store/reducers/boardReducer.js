import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  boardIdd: null,
  allBoards: null,
};

export const userSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoardId: (state, action) => {
      state.boardIdd = action.payload;
    },
    setAllBoards: (state, action) => {
      state.allBoards = action.payload;
    },
  },
});

export const {setBoardId, setAllBoards} = userSlice.actions;

export const boardId = (state) => state.board.boardIdd;

export const selectAllBoards = (state) => state.board.allBoards;

export default userSlice.reducer;
