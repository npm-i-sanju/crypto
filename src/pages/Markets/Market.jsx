import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fatchCryptoList } from '../../store/slice/cryptoSlice.js';
import Table from '../../components/common/Table/Table.jsx';
import Loader from '../../components/common/Loder/Loder.jsx';
import SearchBar from '../../components/crypto/SearchBar/SearchBar.jsx';
import { formatCurrency, formatCompactNumber, formatPercentage } from '../../utils/formatters/numberFormatter.js';
import { filterBySearch } from '../../utils/helpers/filtering.js';

const Markets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, loading } = useSelector((state) => state.crypto);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    dispatch(fatchCryptoList({ page: 1, perPage: 50 }));
  }, [dispatch]);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const handleSearch = (query) => {
    if (query) {
      setFilteredList(filterBySearch(list, query));
    } else {
      setFilteredList(list);
    }
  };

  const columns = [
    {
      header: '#',
      accessor: 'market_cap_rank',
      align: 'text-center',
    },
    {
      header: 'Name',
      accessor: 'name',
      render: (row) => (
        <div className="flex items-center gap-2">
          <img src={row.image} alt={row.name} className="w-6 h-6 rounded-full" />
          <span className="font-medium">{row.name}</span>
          <span className="text-gray-500 uppercase text-sm">{row.symbol}</span>
        </div>
      ),
    },
    {
      header: 'Price',
      accessor: 'current_price',
      align: 'text-right',
      render: (row) => (
        <span className="font-medium">{formatCurrency(row.current_price)}</span>
      ),
    },
    {
      header: '24h %',
      accessor: 'price_change_percentage_24h',
      align: 'text-right',
      render: (row) => (
        <span className={row.price_change_percentage_24h >= 0 ? 'price-up' : 'price-down'}>
          {formatPercentage(row.price_change_percentage_24h)}
        </span>
      ),
    },
    {
      header: '7d %',
      accessor: 'price_change_percentage_7d_in_currency',
      align: 'text-right',
      render: (row) => (
        <span className={row.price_change_percentage_7d_in_currency >= 0 ? 'price-up' : 'price-down'}>
          {formatPercentage(row.price_change_percentage_7d_in_currency || 0)}
        </span>
      ),
    },
    {
      header: 'Market Cap',
      accessor: 'market_cap',
      align: 'text-right',
      render: (row) => formatCompactNumber(row.market_cap),
    },
    {
      header: '24h Volume',
      accessor: 'total_volume',
      align: 'text-right',
      render: (row) => formatCompactNumber(row.total_volume),
    },
  ];

  if (loading) return <Loader size="lg" />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-6">Cryptocurrency Markets</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="card p-0 overflow-hidden">
        <Table
          columns={columns}
          data={filteredList}
          onRowClick={(row) => navigate(`/crypto/${row.id}`)}
        />
      </div>
    </div>
  );
};

export default Markets;