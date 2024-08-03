import { createSlice } from '@reduxjs/toolkit';

const initiaState = {
  page: 1,
};

const stateSlider = createSlice({
  name: 'state-slider',
  initialState: initiaState,
  reducers: {
    getPages: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { getPages } = stateSlider.actions;

export default stateSlider.reducer;
