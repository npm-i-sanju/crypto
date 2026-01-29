export const formatCryptoAmount = (amount, decimals = 8) => {
  if (!amount && amount !== 0) return '-';
  return amount.toFixed(decimals);
};

export const formatFiat = (amount, currency = 'USD') => {
  if (!amount && amount !== 0) return '-';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};