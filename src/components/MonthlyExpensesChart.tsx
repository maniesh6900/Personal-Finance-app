import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MonthlyExpensesChart = ({ data }: { data: any[] }) => {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="expenses" fill="#8884d8" />
    </BarChart>
  );
};

export default MonthlyExpensesChart;