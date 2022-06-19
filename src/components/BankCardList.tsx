import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';
import BankCard from './BankCard';
import { grey, purple } from '../styles/colors';
import Button from './common/Button';
import { useBankCardStore } from '../stores/bankCardStore';
import { observer } from 'mobx-react-lite';
import BankCardFormModal from './BankCardFormModal';

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

interface BankCardListProps {}

const BankCardList: React.FC<BankCardListProps> = observer(() => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [addedBankCard, setAddedBankCard] = useState<boolean>(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  const bankCardStore = useBankCardStore();

  const handleFormSubmit = () => {
    setOpenModal(false);
    setAddedBankCard(true);
  };

  useEffect(() => {
    if (!addedBankCard) return;

    cardsRef.current?.scroll(0, 5000);

    setAddedBankCard(false);
  }, [addedBankCard]);

  return (
    <Root>
      <Header>Your cards</Header>
      <SubHeader>Add, edit or delete your cards any time</SubHeader>
      <Cards ref={cardsRef}>
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
      <Button label="Add new card" onClick={() => setOpenModal(true)} />
      <BankCardFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleFormSubmit}
      />
    </Root>
  );
});

export default BankCardList;
