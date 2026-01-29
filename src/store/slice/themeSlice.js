import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, loadFromLocalStorage } from '../../services/storage/localStorage';

const STORAGE_KEY = 'crypto_theme';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: loadFromLocalStorage(STORAGE_KEY) || 'light',
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      saveToLocalStorage(STORAGE_KEY, state.mode);
      
      // Update DOM
      if (state.mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      saveToLocalStorage(STORAGE_KEY, state.mode);
      
      // Update DOM
      if (state.mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;