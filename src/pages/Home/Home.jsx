import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fatchCryptoList } from "../../store/slice/cryptoSlice.js"
import {addToWatchlist, removeFromWatchlist} from "../../store/slice/watchlistSlice.js"
import CryptoCard from "../../components/crypto/CryptoCard/CryptoCard.jsx"
import CryptoCardSkeleton from '../../components/crypto/CryptoCard/CryptoCardSkeleton';
import SearchBar from '../../components/crypto/SearchBar/SearchBar';
import { filterBySearch } from '../../utils/helpers/filtering';
import toast from 'react-hot-toast';


const Home =()=>{
const dispatch = useDispatch();
const navigate = useNavigate();
const {list , loading, error}= useSelector((state)=>state.crypto)
const {coin: watchlistCoins}= useSelector((state)=>state.watchlist)
const [filteredlist, setFilteredlist]= useState([])

useEffect(()=>{
    dispatch(fatchCryptoList({page: 1, perPage: 12, currency: 'usd'}))
},[dispatch])

useEffect(()=>{
    setFilteredlist(list)
},[list])

 const handelSearch =(query)=>{
    if (query) {
        setFilteredlist(filterBySearch(list, query))
    } else {
        setFilteredlist(list)
    }
 }

 const handleCryptoClick = (cryptoId) => {
    navigate(`/crypto/${cryptoId}`);
  };

const handelWatchlisttoggle = (crypto)=>{
    const isInWatchlist = watchlistCoins.some((c)=>c.id === crypto.id)
    if(isInWatchlist){
        dispatch(removeFromWatchlist(crypto.id))
        toast.success(`${crypto.name} added to watchlist`)
    }else{
        dispatch(addToWatchlist(crypto));
      toast.success(`${crypto.name} added to watchlist`)
    }
}

if (error) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-red-500 text-xl mb-4">Error: {error}</p>
        <button
          onClick={() => dispatch(fatchCryptoList({ page: 1, perPage: 12 }))}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

    return(
        <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gradient">Top Cryptocurrencies</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Real-time price tracking powered by CoinGecko
        </p>
        <SearchBar onSearch={handelSearch} />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <CryptoCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredlist.map((crypto) => (
            <CryptoCard
              key={crypto.id}
              crypto={crypto}
              onClick={() => handleCryptoClick(crypto.id)}
              onWatchlistToggle={handelWatchlisttoggle}
              isInWatchlist={watchlistCoins.some((c) => c.id === crypto.id)}
              />
          ))}
        </div>
      )}
    </div>
    )
}

export default Home;