import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../../../utils/formatters/numberFormatter';
import { formatDate } from '../../../utils/formatters/dateFormatter';

const PriceChart = ({ data, currency = 'USD' }) => {
  if (!data || data.length === 0) return null;

  const chartData = data.map(([timestamp, price]) => ({
    timestamp,
    price,
    date: new Date(timestamp),
  }));

  const isUp = chartData[chartData.length - 1].price >= chartData[0].price;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis
          dataKey="timestamp"
          tickFormatter={(timestamp) => formatDate(timestamp, 'MMM dd')}
          stroke="#888888"
        />
        <YAxis
          tickFormatter={(value) => formatCurrency(value, currency, 0)}
          stroke="#888888"
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
          }}
          labelFormatter={(timestamp) => formatDate(timestamp)}
          formatter={(value) => [formatCurrency(value, currency), 'Price']}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke={isUp ? '#22c55e' : '#ef4444'}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;