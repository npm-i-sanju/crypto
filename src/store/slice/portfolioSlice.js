import { createSlice } from "@reduxjs/toolkit";
import {saveToLocalStorage, loadFormLocalStorage} from '../../services/storage/localStorage.js';


const STORAGE_KEY = 'crypto_portfolio';

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        holdings: loadFormLocalStorage(STORAGE_KEY) || [],
        totalValue: 0,
        totalCost: 0,
        portfitLoss: 0
    },
    reducers:{
        addHolding: (state, action)=>{
            state.holdings.push(action.payload);
            saveToLocalStorage(STORAGE_KEY, state.holdings);
        },
        removeHolding: (state, action)=>{
            state.holdings= state.holdings.filter((h)=>h.id !== action.payload);
            saveToLocalStorage(STORAGE_KEY, state.holdings);
        },
        updateHolding: (state, action)=>{
            const index =  state.holdings.findIndex((h)=>h.id === action.payload.id);
            if (index !== -1) {
                state.holdings[index] = action.payload;
                saveToLocalStorage(STORAGE_KEY, state.holdings);
            }
        },
        calculateTotals: (state, action)=>{
            const prices = action.payload;
            let totalValue = 0;
            let totalCost = 0;

            state.holdings.forEach((holdings)=>{
                const currentPrice = prices[holdings.id] || 0;
                totalValue += currentPrice * holdings.amount;
                totalCost += holdings.amount * holdings.buyPrice;
            })
            state.totalValue = totalValue;
            state.totalCost = totalCost;
            state.portfitLoss = totalValue - totalCost;
        }
    }

})

export const {addHolding, removeHolding, updateHolding, calculateTotals} = portfolioSlice.actions;
export default portfolioSlice.reducer;