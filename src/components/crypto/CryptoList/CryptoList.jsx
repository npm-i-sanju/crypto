import CryptoListItem from './CryptoListItem';

const CryptoList = ({ cryptos, onCryptoClick }) => {
  return (
    <div className="card p-0 overflow-hidden">
      <div className="divide-y divide-gray-200 dark:divide-dark-border">
        {cryptos.map((crypto) => (
          <CryptoListItem key={crypto.id} crypto={crypto} onClick={onCryptoClick} />
        ))}
      </div>
    </div>
  );
};

export default CryptoList;