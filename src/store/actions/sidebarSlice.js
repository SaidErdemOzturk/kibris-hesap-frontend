import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: true, // Başlangıçta sidebar açık
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen; // Menü durumu değiştirilir
    },
  },
});

export const { toggleMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer; // sidebarReducer burada default olarak export ediliyor.
