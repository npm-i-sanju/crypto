import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from './slice/cryptoSlice.js'
import marketReducer from './slice/marketSlice.js'
import portfolioReducer from './slice/portfolioSlice.js'
import watchlistReducer from './slice/watchlistSlice.js'
import alertReducer from './slice/alertsSlice.js'
import themeReducer from './slice/themeSlice.js'


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
