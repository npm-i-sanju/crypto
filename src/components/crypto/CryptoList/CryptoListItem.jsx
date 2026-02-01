import { formatCurrency, formatPercentage, formatCompactNumber } from '../../../utils/formatters/numberFormatter';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const CryptoListItem = ({ crypto, onClick }) => {
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <div
      onClick={() => onClick(crypto)}
      className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
    >
      <div className="flex items-center gap-3 flex-1">
        <img src={crypto.image} alt={crypto.name} className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="font-semibold">{crypto.name}</h3>
          <p className="text-sm text-gray-500 uppercase">{crypto.symbol}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-bold">{formatCurrency(crypto.current_price)}</p>
        <div className={`flex items-center gap-1 justify-end ${isPositive ? 'price-up' : 'price-down'}`}>
          {isPositive ? <FiTrendingUp size={14} /> : <FiTrendingDown size={14} />}
          <span className="text-sm">{formatPercentage(crypto.price_change_percentage_24h)}</span>
        </div>
      </div>
    </div>
  );
};

export default CryptoListItem;