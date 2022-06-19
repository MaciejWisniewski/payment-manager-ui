import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';
import cardBackgroundShape from '../svgs/card-background-shape.svg';
import mastercardLogo from '../svgs/mastercard-logo.svg';
import editIcon from '../svgs/edit-icon.svg';
import { grey, purple, white } from '../styles/colors';

const Root = styled('div')`
  width: 100%;
  max-width: 350px;
  height: 207px;
  max-height: 207px;
  padding: 32px;
  margin-bottom: 16px;
  border-radius: 16px;
  background-image: url(${cardBackgroundShape});
  background-color: ${purple[100]};
  background-size: 117% 100%;
  color: ${white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UpperRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FlexBox = styled('div')`
  display: flex;
`;

const CvcBox = styled('div')`
  display: flex;
  flex-direction: column;
  margin-right: 32px;

  @media screen and (max-width: 370px) {
    margin-right: 16px;
  }
`;

const UpperRowLabel = styled('div')`
  font-size: 10px;
  color: ${grey[20]};
`;

const UpperRowValue = styled('div')`
  font-size: 16px;
  font-weight: bold;
`;

const FullName = styled('div')`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: left;
`;

const BottomRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardNumber = styled('div')`
  word-spacing: 16px;
  font-size: 16px;
  color: ${grey[20]};

  @media screen and (max-width: 370px) {
    word-spacing: 8px;
  }
`;

interface BankCardProps {
  cvc: string;
  expiryDate: Date;
  fullName: string;
  cardNumber: string;
}

const BankCard: React.FC<BankCardProps> = ({
  cvc,
  expiryDate,
  fullName,
  cardNumber,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number>(207);

  useEffect(() => {
    const updateCardHeight = () => {
      if (cardRef.current) setCardHeight(cardRef.current.offsetWidth / 1.687);
    };

    window.addEventListener('resize', updateCardHeight);

    return () => window.removeEventListener('resize', updateCardHeight);
  }, []);

  const formatCardNumber = (cardNumber: string) => {
    return cardNumber.trim().replace(/\d{4}(?=.)/g, '$& ');
  };

  const formatExpires = (expiryDate: Date) => {
    return expiryDate.toLocaleDateString('en-US', {
      month: '2-digit',
      year: '2-digit',
    });
  };

  return (
    <Root
      ref={cardRef}
      sx={{
        height: cardHeight,
      }}
    >
      <UpperRow>
        <img src={mastercardLogo} alt="mastercard" />
        <FlexBox>
          <CvcBox>
            <UpperRowLabel>CVC</UpperRowLabel>
            <UpperRowValue>{cvc}</UpperRowValue>
          </CvcBox>
          <div>
            <UpperRowLabel>EXPIRES</UpperRowLabel>
            <UpperRowValue>{formatExpires(expiryDate)}</UpperRowValue>
          </div>
        </FlexBox>
      </UpperRow>
      <div>
        <FullName>{fullName}</FullName>
        <BottomRow>
          <CardNumber>{formatCardNumber(cardNumber)}</CardNumber>
          <img src={editIcon} alt="edit" />
        </BottomRow>
      </div>
    </Root>
  );
};

export default BankCard;
