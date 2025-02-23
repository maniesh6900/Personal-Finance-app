
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"


function App() {



  return (
    <>
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold">Personal Finance Tracker</h1>
    
    <section className="my-8">
      <h2 className="text-xl">Add Transaction</h2>
      <TransactionForm />
    </section>
    
    <section className="my-8">
      <h2 className="text-xl">Recent Transactions</h2>
      <TransactionList />
    </section>
  
  </div>

    </>
  )
}

export default App
