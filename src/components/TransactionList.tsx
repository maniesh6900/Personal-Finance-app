import axios from 'axios';
import { useEffect, useState } from 'react';
import MonthlyExpensesChart from './MonthlyExpensesChart';

const TransactionList = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await axios.get('http://localhost:3000/api/transitions');
      setTransactions(res.data.data);
    };
    fetchTransactions();
  }, []);

//   const handleFunction = async(id : number)=> {
//     const res =  await axios.delete('http://localhost:3000/api/transitions' + id)
//     if (res.status === 200) {
//       setTransactions(transactions.filter(transaction => transaction._id !== id));
//     }
//   }

async function handleFunction(id : string){
const res =  await axios.delete('http://localhost:3000/api/transitions' + id)
console.log(res.status);

}

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction._id} className="border w-1/3 p-4 font-bold rounded">
          <h3> Description : {transaction.description}</h3>
          <p> Amount :  {transaction.amount}</p>
          <p> catagory :  {transaction.catagory}</p>
          <p>Date :{new Date(transaction.date).toLocaleDateString()}</p>
          <button 
            className='bg-red-500 text-white p-2 rounded mt-2' 
            onClick={()=>handleFunction(transaction._id)}
        >delete</button>
        </div>
      ))}


    <div>
        <MonthlyExpensesChart data={transactions} />
    </div> 
    </div>


  );
};

export default TransactionList;

