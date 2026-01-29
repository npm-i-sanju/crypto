import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, loadFromLocalStorage } from '../../services/storage/localStorage';

const STORAGE_KEY = 'crypto_alerts';

const alertsSlice = createSlice({
  name: 'alerts',
  initialState: {
    alerts: loadFromLocalStorage(STORAGE_KEY) || [],
  },
  reducers: {
    addAlert: (state, action) => {
      state.alerts.push({
        id: Date.now(),
        ...action.payload,
        triggered: false,
      });
      saveToLocalStorage(STORAGE_KEY, state.alerts);
    },
    removeAlert: (state, action) => {
      state.alerts = state.alerts.filter((a) => a.id !== action.payload);
      saveToLocalStorage(STORAGE_KEY, state.alerts);
    },
    triggerAlert: (state, action) => {
      const alert = state.alerts.find((a) => a.id === action.payload);
      if (alert) {
        alert.triggered = true;
        saveToLocalStorage(STORAGE_KEY, state.alerts);
      }
    },
    clearTriggeredAlerts: (state) => {
      state.alerts = state.alerts.filter((a) => !a.triggered);
      saveToLocalStorage(STORAGE_KEY, state.alerts);
    },
  },
});

export const { addAlert, removeAlert, triggerAlert, clearTriggeredAlerts } = alertsSlice.actions;
export default alertsSlice.reducer;