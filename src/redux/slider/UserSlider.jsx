import { createSlice } from '@reduxjs/toolkit';

const initiaState = {
  users: [],
  loading: false,
  success: false,
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
  },
});

export const { getUserStart, getUserSuccess, getUserFailure } = usersSlice.actions;

export default usersSlice.reducer;
