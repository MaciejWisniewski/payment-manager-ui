import React from 'react';
import { styled } from '@mui/system';
import BankCard from './BankCard';
import { grey, purple } from '../styles/colors';
import Button from './common/Button';

const Root = styled('div')`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 24px;
`;

const Header = styled('div')`
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  color: ${purple[60]};
  text-align: left;
  margin-bottom: 4px;
`;

const SubHeader = styled('div')`
  text-align: left;
  width: 100%;
  color: ${grey[50]};
`;

const Cards = styled('div')`
  padding-top: 56px;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-bottom: 24px;
`;

interface BankCardListProps {}

const BankCardList: React.FC<BankCardListProps> = () => {
  return (
    <Root>
      <Header>Your cards</Header>
      <SubHeader>Add, edit or delete your cards any time</SubHeader>
      <Cards>
        <BankCard
          cvc="009"
          expires={new Date(2022, 8)}
          fullName="John Cabruci"
          cardNumber="5532123455458014"
        />
        <BankCard
          cvc="009"
          expires={new Date(2022, 8)}
          fullName="John Cabruci"
          cardNumber="5532123455458014"
        />
        <BankCard
          cvc="009"
          expires={new Date(2022, 8)}
          fullName="John Cabruci"
          cardNumber="5532123455458014"
        />
        <BankCard
          cvc="009"
          expires={new Date(2022, 8)}
          fullName="John Cabruci"
          cardNumber="5532123455458014"
        />
      </Cards>
      <Button label="Add new card" />
    </Root>
  );
};

export default BankCardList;
