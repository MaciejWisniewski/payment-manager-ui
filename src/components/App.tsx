import React from 'react';
import BankCard from './BankCard';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <BankCard
        cvc="009"
        expires={new Date(2022, 8)}
        fullName="John Cabruci"
        cardNumber="5532123455458014"
      />
    </div>
  );
}

export default App;
