import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const CategoryPieChart = ({ data }: { data: any[] }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="category" outerRadius={150} fill="#8884d8" label>
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CategoryPieChart;