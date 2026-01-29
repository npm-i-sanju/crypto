export const sortByPrice = (cryptos, ascending = false) => {
  return [...cryptos].sort((a, b) => {
    return ascending
      ? a.current_price - b.current_price
      : b.current_price - a.current_price;
  });
};

export const sortByMarketCap = (cryptos, ascending = false) => {
  return [...cryptos].sort((a, b) => {
    return ascending ? a.market_cap - b.market_cap : b.market_cap - a.market_cap;
  });
};

export const sortByChange = (cryptos, ascending = false) => {
  return [...cryptos].sort((a, b) => {
    return ascending
      ? a.price_change_percentage_24h - b.price_change_percentage_24h
      : b.price_change_percentage_24h - a.price_change_percentage_24h;
  });
};

export const sortByName = (cryptos, ascending = true) => {
  return [...cryptos].sort((a, b) => {
    return ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });
};