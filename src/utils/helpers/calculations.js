export const calculateProfitLoss = (buyPrice, currentPrice, amount) => {
  const costBasis = buyPrice * amount;
  const currentValue = currentPrice * amount;
  return {
    profit: currentValue - costBasis,
    profitPercentage: ((currentValue - costBasis) / costBasis) * 100,
  };
};

export const calculatePortfolioValue = (holdings, prices) => {
  return holdings.reduce((total, holding) => {
    const currentPrice = prices[holding.cryptoId] || 0;
    return total + holding.amount * currentPrice;
  }, 0);
};

export const calculateMarketCap = (price, circulatingSupply) => {
  return price * circulatingSupply;
};