import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import{getGlobalMarketData, getTrendingCrypto} from "../../services/api/coingecko.js"


export const fatchGlobalData = createAsyncThunk(
    'market/featchGlobal',
    async()=>{
        const response = await getGlobalMarketData();
        return response;
    }
)


const marketSlice = createSlice({
    name: 'market',
    initialState:{
        globalData: null,
        trending:[],
        loading: false,
        error: null,
    },
    reducers:{
        setGlobalData:(state, action)=>{
state.globalData= action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fatchGlobalData.pending, (state, action)=>{
            state.globalData = action.payload;
        })
        .addCase(fatchTrending.fulfilled, (state, action )=>{
            state. trending = action.payload;
        })
    }
})

export const {setGlobalData} = marketSlice.actions;
export default marketSlice.reducer;