import './App.css';

import Header from './components/Header';
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense';
export default function App() {
  return (
    <>
     <Header/>
     <div className="container">
      <Balance/>
      <IncomeExpense/>
     </div>
    </>
  );
}

