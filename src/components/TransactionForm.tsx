import axios from 'axios';
import { useState } from 'react';


const TransactionForm = () => {
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTransaction = { amount, date, description, category };
    
    const res = await axios.post('http://localhost:3000/api/transitions', {newTransaction});

    if (res.status === 200) {
      console.log('Transaction added!');
    } else {
      console.error('Failed to add transaction');
    }
  };



  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        placeholder="Amount"
        className="input"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        required
        />
      <input
        title="date"
        type="date"
        className="input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        />
      <input
        type="text"
        placeholder="Description"
        className="input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        />
      <select
        title="catagory"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="input"
        required
        >
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        {/* Add more categories as needed */}
      </select>
      <button type="submit" className="btn btn-primary">
        Add Transaction
      </button>

    </form>
      
    </>
  );
};

export default TransactionForm;
