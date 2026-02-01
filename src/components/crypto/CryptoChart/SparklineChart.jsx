import { LineChart, Line, ResponsiveContainer } from 'recharts';

const SparklineChart = ({ data, color = '#22c55e' }) => {
  if (!data || data.length === 0) return null;

  const chartData = data.map((value, index) => ({
    index,
    value,
  }));

  return (
    <ResponsiveContainer width="100%" height={50}>
      <LineChart data={chartData}>
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={1.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SparklineChart;