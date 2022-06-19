import React, { useState } from 'react';
import { styled } from '@mui/system';
import BankCardList from './BankCardList';
import { background } from '../styles/colors';
import BankCardFormModal from './BankCardFormModal';
import '../styles/App.css';

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${background};
  padding: 24px;
`;

function App() {
  const [bankCardFormModalOpen, setBankCardFormModalOpen] =
    useState<boolean>(false);

  return (
    <Root className="App">
      <BankCardList onAddNewCardClick={() => setBankCardFormModalOpen(true)} />
      <BankCardFormModal
        open={bankCardFormModalOpen}
        onClose={() => setBankCardFormModalOpen(false)}
      />
    </Root>
  );
}

export default App;
