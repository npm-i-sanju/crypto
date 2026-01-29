export const filterBySearch = (cryptos, query) => {
  const lowerQuery = query.toLowerCase();
  return cryptos.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(lowerQuery) ||
      crypto.symbol.toLowerCase().includes(lowerQuery)
  );
};

export const filterByPriceRange = (cryptos, min, max) => {
  return cryptos.filter(
    (crypto) => crypto.current_price >= min && crypto.current_price <= max
  );
};

export const filterByChange = (cryptos, minChange) => {
  return cryptos.filter((crypto) => crypto.price_change_percentage_24h >= minChange);
};