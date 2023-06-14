import './App.css';

import Header from './components/Header';
import Balance from './components/Balance'
export default function App() {
  return (
    <>
     <Header/>
     <div className="container">
      <Balance/>
     </div>
    </>
  );
}

