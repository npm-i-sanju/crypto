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
    async (id)=>{
const response = await getCryptoDetails(id)
return response;
    }
)