import React from 'react';
import { styled } from '@mui/system';
import BankCardList from './BankCardList';
import { background } from '../styles/colors';
import '../styles/App.css';

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${background};
`;

function App() {
  return (
    <Root className="App">
      <BankCardList />
    </Root>
  );
}

export default App;
