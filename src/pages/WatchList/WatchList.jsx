import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromWatchlist } from '../../store/slices/watchlistSlice';
import { getCryptoList } from '../../services/api/coingecko';
import CryptoCard from '../../components/crypto/CryptoCard/CryptoCard';
import Loader from '../../components/common/Loader/Loader';
import toast from 'react-hot-toast';

const Watchlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { coins: watchlistCoins } = useSelector((state) => state.watchlist);
  const [watchlistData, setWatchlistData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatchlistData = async () => {
      if (watchlistCoins.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const data = await getCryptoList(1, 250);
        const filtered = data.filter((crypto) =>
          watchlistCoins.some((wc) => wc.id === crypto.id)
        );
        setWatchlistData(filtered);
      } catch (error) {
        console.error('Error fetching watchlist data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlistData();
  }, [watchlistCoins]);

  const handleRemoveFromWatchlist = (crypto) => {
    dispatch(removeFromWatchlist(crypto.id));
    toast.success(`${crypto.name} removed from watchlist`);
  };

  if (loading) return <Loader size="lg" />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>

      {watchlistData.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-gray-500 mb-4">Your watchlist is empty</p>
          <button className="btn-primary" onClick={() => navigate('/')}>
            Explore Cryptocurrencies
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {watchlistData.map((crypto) => (
            <CryptoCard
              key={crypto.id}
              crypto={crypto}
              onClick={() => navigate(`/crypto/${crypto.id}`)}
              onWatchlistToggle={handleRemoveFromWatchlist}
              isInWatchlist={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;