import { formatCompactNumber, formatNumber } from '../../../utils/formatters/numberFormatter';

const MarketStats = ({ crypto }) => {
  const stats = [
    { label: 'Market Cap', value: formatCompactNumber(crypto.market_data?.market_cap?.usd) },
    { label: 'Market Cap Rank', value: `#${crypto.market_cap_rank}` },
    { label: '24h Volume', value: formatCompactNumber(crypto.market_data?.total_volume?.usd) },
    { label: 'Circulating Supply', value: formatNumber(crypto.market_data?.circulating_supply, 0) },
    { label: 'Total Supply', value: formatNumber(crypto.market_data?.total_supply, 0) },
    { label: 'Max Supply', value: crypto.market_data?.max_supply ? formatNumber(crypto.market_data.max_supply, 0) : '∞' },
  ];

  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold mb-4">Market Statistics</h3>
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

export default MarketStats;