import { formatCurrency, formatPercentage } from '../../../utils/formatters/numberFormatter';

const PortfolioSummary = ({ totalValue, totalCost, profitLoss }) => {
  const profitLossPercentage = totalCost > 0 ? ((totalValue - totalCost) / totalCost) * 100 : 0;
  const isProfit = profitLoss >= 0;

  return (
    <div className="card p-6">
      <h2 className="text-2xl font-bold mb-6">Portfolio Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p className="text-gray-600 dark:text-gray-400 mb-1">Total Value</p>
          <p className="text-3xl font-bold">{formatCurrency(totalValue)}</p>
        </div>

        <div>
          <p className="text-gray-600 dark:text-gray-400 mb-1">Total Cost</p>
          <p className="text-2xl font-semibold">{formatCurrency(totalCost)}</p>
        </div>

        <div>
          <p className="text-gray-600 dark:text-gray-400 mb-1">Profit/Loss</p>
          <p className={`text-2xl font-semibold ${isProfit ? 'price-up' : 'price-down'}`}>
            {formatCurrency(profitLoss)}
          </p>
          <p className={`text-sm ${isProfit ? 'price-up' : 'price-down'}`}>
            {formatPercentage(profitLossPercentage)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;