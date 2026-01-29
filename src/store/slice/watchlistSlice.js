import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, loadFromLocalStorage } from '../../services/storage/localStorage.js';

const STORAGE_KEY = 'crypto_watchlist';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: {
    coins: loadFromLocalStorage(STORAGE_KEY) || [],
  },
  reducers: {
    addToWatchlist: (state, action) => {
      if (!state.coins.find((c) => c.id === action.payload.id)) {
        state.coins.push(action.payload);
        saveToLocalStorage(STORAGE_KEY, state.coins);
      }
    },
    removeFromWatchlist: (state, action) => {
      state.coins = state.coins.filter((c) => c.id !== action.payload);
      saveToLocalStorage(STORAGE_KEY, state.coins);
    },
    clearWatchlist: (state) => {
      state.coins = [];
      saveToLocalStorage(STORAGE_KEY, []);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, clearWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;