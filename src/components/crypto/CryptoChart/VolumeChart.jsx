import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCompactNumber } from '../../../utils/formatters/numberFormatter';
import { formatDate } from '../../../utils/formatters/dateFormatter';

const VolumeChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const chartData = data.map(([timestamp, volume]) => ({
    timestamp,
    volume,
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="timestamp"
          tickFormatter={(timestamp) => formatDate(timestamp, 'MMM dd')}
          stroke="#888888"
        />
        <YAxis tickFormatter={(value) => formatCompactNumber(value)} stroke="#888888" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
          }}
          labelFormatter={(timestamp) => formatDate(timestamp)}
          formatter={(value) => [formatCompactNumber(value), 'Volume']}
        />
        <Bar dataKey="volume" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VolumeChart;