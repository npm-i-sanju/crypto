import axiosInstance from './axiosInstance.js';

export const getCryptoList = async (page = 1, perPage = 100, currency = 'usd') => {
    const response = await axiosInstance.get('/coins/markets', {
        params: {
            vs_currency: currency,
            order: 'market_cap_desc',
            per_page: perPage,
            page: page,
            sparkline: false,
            price_change_percentage: '1h,24h,7d'
        }
    })
    return response.data;
}

export const getCryptoDetails = async (id) => {
    const response = await axiosInstance.get(`/coins/${id}`, {
        params: {
            localization: false,
            tickers: false,
            community_data: false,
            developer_data: false,
            sparkline: false
        }
    })
    return response.data;
}

export const getCryptoChart = async (id, days = 7, currency = 'usd') => {
    const response = await axiosInstance.get(`/coins/${id}/market_chart`, {
        params: {
            vs_currency: currency,
            days: days,

        }
    })
    return response.data;
}



export const searchCrypto = async (query) => {
    const response = await axiosInstance.get('/search',{
        params: {
            query: query,
        }
    })
    return response.data;
}

export const getglobalMarketData = async()=>{
    const response = await axiosInstance.get('/global')
    return response.data;
}

export const getTrendingCrypto = async()=>{
    const response = await axiosInstance.get('/search/trending')
    return response.data;
}