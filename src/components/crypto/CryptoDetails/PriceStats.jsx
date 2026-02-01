import { formatCurrency, formatPercentage } from '../../../utils/formatters/numberFormatter';

const PriceStats = ({ crypto }) => {
  const stats = [
    { label: 'Current Price', value: formatCurrency(crypto.market_data?.current_price?.usd) },
    { label: '24h High', value: formatCurrency(crypto.market_data?.high_24h?.usd) },
    { label: '24h Low', value: formatCurrency(crypto.market_data?.low_24h?.usd) },
    { label: '24h Change', value: formatPercentage(crypto.market_data?.price_change_percentage_24h) },
    { label: '7d Change', value: formatPercentage(crypto.market_data?.price_change_percentage_7d) },
    { label: '30d Change', value: formatPercentage(crypto.market_data?.price_change_percentage_30d) },
  ];

  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold mb-4">Price Statistics</h3>
      <div className="space-y-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">{stat.label}</span>
            <span className="font-semibold">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceStats;