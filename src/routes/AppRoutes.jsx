import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Markets from '../pages/Markets/Markets';
import CryptoDetail from '../pages/CryptoDetail/CryptoDetail';
import Portfolio from "../pages/PortFolio/PortFolio.jsx"
import Watchlist from "../pages/WatchList/WatchList.jsx"
import Compare from "../pages/Compare/Compare.jsx"
import NotFound from "../pages/notFound/NotFound.jsx"


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/crypto/:id" element={<CryptoDetail />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;