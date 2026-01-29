// API endpoint constants
export const ENDPOINTS = {
  COINS_MARKETS: '/coins/markets',
  COIN_DETAILS: (id) => `/coins/${id}`,
  COIN_CHART: (id) => `/coins/${id}/market_chart`,
  SEARCH: '/search',
  GLOBAL: '/global',
  TRENDING: '/search/trending',
};

export default ENDPOINTS;