import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from './slice/cryptoSlice.js'


export const store = configureStore({
    reducer: {
        crypto: cryptoReducer,
        market: marketReducer,
        portfolio: portfolioReducer,
        watchlist: watchlistReducer,
        alert: alertReducer,
        theme: themeReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
             serializableCheck: false,
        })
})

