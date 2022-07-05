import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleSwitch: (state, action) => {},
  },
});

export const { toggleSwitch } = themeSlice.actions;

export default themeSlice.reducer;
