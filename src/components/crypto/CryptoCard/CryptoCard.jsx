import { formatCurrency, formatPercentage, formatCompactNumber } from '../../../utils/formatters/numberFormatter';
import { FiTrendingUp, FiTrendingDown, FiStar } from 'react-icons/fi';

const CryptoCard = ({ crypto, onClick, onWatchlistToggle, isInWatchlist }) => {
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <div className="card p-6 hover:shadow-xl transition-shadow cursor-pointer relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onWatchlistToggle && onWatchlistToggle(crypto);
        }}
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
      >
        <FiStar
          size={18}
          className={isInWatchlist ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
        />
      </button>

      <div onClick={onClick}>
        <div className="flex items-center gap-3 mb-4">
          <img
            src={crypto.image}
            alt={crypto.name}
            className="w-12 h-12 rounded-full"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/48';
            }}
          />
          <div>
            <h3 className="font-bold text-lg">{crypto.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">{crypto.symbol}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold">{formatCurrency(crypto.current_price)}</span>
            <div className={`flex items-center gap-1 ${isPositive ? 'price-up' : 'price-down'}`}>
              {isPositive ? <FiTrendingUp /> : <FiTrendingDown />}
              <span className="font-semibold">
                {formatPercentage(crypto.price_change_percentage_24h)}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 dark:border-dark-border space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Rank</span>
              <span className="font-medium">#{crypto.market_cap_rank}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Market Cap</span>
              <span className="font-medium">{formatCompactNumber(crypto.market_cap)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">24h Volume</span>
              <span className="font-medium">{formatCompactNumber(crypto.total_volume)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;