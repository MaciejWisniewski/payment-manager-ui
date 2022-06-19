import { createContext, useContext } from 'react';
import { action, makeObservable, observable } from 'mobx';
import { BankCard } from '../types/bankCard';

class BankCardStore {
  bankCards: BankCard[] = [
    {
      cvc: '009',
      expiryDate: new Date(2022, 8),
      fullName: 'John Cabruci',
      cardNumber: '5532123455458014',
    },
    {
      cvc: '019',
      expiryDate: new Date(2022, 10),
      fullName: 'John Cabruci',
      cardNumber: '2299 1234 5545 0001',
    },
  ];

  constructor() {
    makeObservable(this, {
      bankCards: observable,
      addBankCard: action,
    });
  }

  addBankCard(bankCard: BankCard) {
    const newBankCards = [...this.bankCards];
    newBankCards.push(bankCard);

    this.bankCards = newBankCards;
  }
}

const bankCardContext = createContext(new BankCardStore());

export const useBankCardStore = () => useContext(bankCardContext);
