import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const BudgetVsActualChart = ({ budgetData, actualData }: { budgetData: any[]; actualData: any[] }) => {
  console.log(actualData);
  
  return (
    <LineChart width={500} height={300} data={budgetData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="budget" stroke="#8884d8" />
      <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
    </LineChart>
  );
};

export default BudgetVsActualChart;