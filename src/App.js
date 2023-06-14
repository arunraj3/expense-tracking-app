import './App.css';

import Header from './components/Header';
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
export default function App() {
  return (
    <>
     <Header/>
     <div className="container">
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
     </div>
    </>
  );
}

