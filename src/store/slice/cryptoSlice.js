import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCryptoList, getCryptoDetails, getCryptoChart } from '../../services/api/coingecko.js'

export const fatchCryptoList = createAsyncThunk(
    'crypto/fatchlist',
    async ({ page = 1, prePage = 100, currency = 'usd' }) => {
        const response = await getCryptoList(page, prePage, currency)
        return response
    }
)

export const fatchCryptoDetails = createAsyncThunk(
    'crypto/fatchDetails',
    async (id) => {
        const response = await getCryptoDetails(id)
        return response;
    }
)

export const fatchCryptoChart = createAsyncThunk(
    'crypto/fatchChart',
    async ({id, days = 7, currency='usd'})=>{
        const response = await getCryptoChart(id, days, currency);
        return response
    }
)

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState: {
        list: [],
        selectedCrypto: null,
        chartDate: null,
        loading: false,
        error: null,
        currency: 'usd',
        page: 1,
        hasMore: true,
    },
reducers:{
    setCurency: (state, action) =>{
        state.currency = action.payload;
    },
    updateCryptoPrices: (state, action)=>{
        const{id, price, change} = action.payload
        const crypto = state.list.find((c)=>c.id === id)
        if (crypto) {
            crypto.current_price = price
            crypto.price_change_percentage_24h = change
        }
    },
    clearSelectedCrypto: (state)=>{
state.selectedCrypto = null;
state.chartDate =null
    }
},
extraReducers:(builder)=>{
    builder
    .addCase(fatchCryptoList.pending, (state)=>{
        state.loading=true
        state.error= null
    })
    .addCase(fatchCryptoList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fatchCryptoList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch crypto details
      .addCase(fatchCryptoDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fatchCryptoDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCrypto = action.payload;
      })
      .addCase(fatchCryptoDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch crypto chart 
      .addCase(fatchCryptoChart.fulfilled, (state, action) => {
        state.chartData = action.payload;
    
      });
}

})


export const {setCurency, updateCryptoPrices, clearSelectedCrypto} = cryptoSlice.actions
export default cryptoSlice.reducer;