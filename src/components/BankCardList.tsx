import React from 'react';
import { styled } from '@mui/system';
import BankCard from './BankCard';
import { grey, purple } from '../styles/colors';
import Button from './common/Button';
import { useBankCardStore } from '../stores/bankCardStore';
import { observer } from 'mobx-react-lite';

const Root = styled('div')`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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

interface BankCardListProps {
  onAddNewCardClick: () => void;
}

const BankCardList: React.FC<BankCardListProps> = observer(
  ({ onAddNewCardClick }) => {
    const bankCardStore = useBankCardStore();

    return (
      <Root>
        <Header>Your cards</Header>
        <SubHeader>Add, edit or delete your cards any time</SubHeader>
        <Cards>
          {bankCardStore.bankCards.map((card) => (
            <BankCard
              key={card.cardNumber}
              cvc={card.cvc}
              expiryDate={card.expiryDate}
              fullName={card.fullName}
              cardNumber={card.cardNumber}
            />
          ))}
        </Cards>
        <Button label="Add new card" onClick={onAddNewCardClick} />
      </Root>
    );
  }
);

export default BankCardList;
