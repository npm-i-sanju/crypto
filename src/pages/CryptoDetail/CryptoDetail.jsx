import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fatchCryptoDetails, fetchCryptoChart } from '../../store/slices/cryptoSlice';
import { addToWatchlist, removeFromWatchlist } from '../../store/slices/watchlistSlice';
import Loader from '../../components/common/Loader/Loader';
import Button from '../../components/common/Button/Button';
import PriceChart from '../../components/crypto/CryptoChart/PriceChart';
import VolumeChart from '../../components/crypto/CryptoChart/VolumeChart';
import CryptoDetails from '../../components/crypto/CryptoDetails/CryptoDetails';
import { formatCurrency, formatPercentage } from '../../utils/formatters/numberFormatter';
import { FiArrowLeft, FiStar } from 'react-icons/fi';
import toast from 'react-hot-toast';

const CryptoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedCrypto, chartData, loading } = useSelector((state) => state.crypto);
  const { coins: watchlistCoins } = useSelector((state) => state.watchlist);
  const [chartPeriod, setChartPeriod] = useState(7);

  useEffect(() => {
    dispatch(fatchCryptoDetails(id));
    dispatch(fetchCryptoChart({ id, days: chartPeriod }));
  }, [dispatch, id, chartPeriod]);

  const isInWatchlist = watchlistCoins.some((c) => c.id === id);

  const handleWatchlistToggle = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(id));
      toast.success('Removed from watchlist');
    } else {
      dispatch(addToWatchlist({ id, name: selectedCrypto.name }));
      toast.success('Added to watchlist');
    }
  };

  if (loading || !selectedCrypto) return <Loader size="lg" />;

  const isPositive = selectedCrypto.market_data?.price_change_percentage_24h >= 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-6">
        <FiArrowLeft className="inline mr-2" />
        Back
      </Button>

      <div className="card p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <img src={selectedCrypto.image?.large} alt={selectedCrypto.name} className="w-16 h-16" />
            <div>
              <h1 className="text-3xl font-bold">{selectedCrypto.name}</h1>
              <p className="text-gray-500 uppercase">{selectedCrypto.symbol}</p>
            </div>
          </div>
          <Button variant="secondary" onClick={handleWatchlistToggle}>
            <FiStar className={`inline mr-2 ${isInWatchlist ? 'fill-yellow-400 text-yellow-400' : ''}`} />
            {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </Button>
        </div>

        <div className="mb-6">
          <div className="text-4xl font-bold mb-2">
            {formatCurrency(selectedCrypto.market_data?.current_price?.usd)}
          </div>
          <div className={`text-xl ${isPositive ? 'price-up' : 'price-down'}`}>
            {formatPercentage(selectedCrypto.market_data?.price_change_percentage_24h)}
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          {[1, 7, 30, 90, 365].map((days) => (
            <Button
              key={days}
              variant={chartPeriod === days ? 'primary' : 'secondary'}
              onClick={() => setChartPeriod(days)}
            >
              {days}D
            </Button>
          ))}
        </div>

        {chartData && <PriceChart data={chartData.prices} />}
        {chartData && (
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Volume</h3>
            <VolumeChart data={chartData.total_volumes} />
          </div>
        )}
      </div>

      <CryptoDetails crypto={selectedCrypto} />

      {selectedCrypto.description?.en && (
        <div className="card p-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">About {selectedCrypto.name}</h2>
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedCrypto.description.en }}
          />
        </div>
      )}
    </div>
  );
};

export default CryptoDetail;