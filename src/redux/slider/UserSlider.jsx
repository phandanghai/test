import { createSlice } from '@reduxjs/toolkit';

const initiaState = {
  users: [],
  loading: false,
  success: false,
  page: 1,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initiaState,
  reducers: {
    getUserStart: (state) => {
      state.loading = true;
      state.success = false;
    },
    getUserSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.loading = false;
      state.success = false;
    },
    getPages: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { getUserStart, getUserSuccess, getUserFailure, getPages } =
  usersSlice.actions;

export default usersSlice.reducer;
