import PriceStats from './PriceStats';
import MarketStats from './MarketStats';

const CryptoDetails = ({ crypto }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <PriceStats crypto={crypto} />
      <MarketStats crypto={crypto} />
    </div>
  );
};

export default CryptoDetails;