export const API_CONFIG = {
    BASE_URL:import.meta.env.VITE_COINGECKO_API_URL,
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 3,
}

export const PAGINATION ={
    DEFAULT_PAGE: 1,
    DEFAULT_PAGE_SIZE: 100,
    MAX_PAGE_SIZE: 250,
}

export const CURRENCIES ={
    USD:'usd,',
    EUR:'eur',
    GBP: 'gbp',
    JPY: 'jpy',

    
}