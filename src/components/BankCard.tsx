import React from 'react';
import { styled } from '@mui/system';
import cardBackgroundShape from '../svgs/card-background-shape.svg';
import mastercardLogo from '../svgs/mastercard-logo.svg';
import editIcon from '../svgs/edit-icon.svg';
import { grey, purple, white } from '../styles/colors';

const Root = styled('div')`
  width: 395px;
  height: 215px;
  padding: 32px;
  margin: 1rem;
  border-radius: 16px;
  background-image: url(${cardBackgroundShape});
  background-color: ${purple[100]};
  background-size: 118% 118%;
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
`;

const UpperRowLabel = styled('div')`
  font-size: 10px;
  color: ${grey[20]};
`;

const UpperRowValue = styled('div')`
  font-size: 14px;
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
  color: ${grey[20]};
`;

interface BankCardProps {
  cvc: string;
  expires: Date;
  fullName: string;
  cardNumber: string;
}

const BankCard: React.FC<BankCardProps> = ({
  cvc,
  expires,
  fullName,
  cardNumber,
}) => {
  const formatCardNumber = (cardNumber: string) => {
    return cardNumber.trim().replace(/\d{4}(?=.)/g, '$& ');
  };

  const formatExpires = (expires: Date) => {
    return expires.toLocaleDateString('en-US', {
      month: '2-digit',
      year: '2-digit',
    });
  };

  return (
    <Root>
      <UpperRow>
        <img src={mastercardLogo} />
        <FlexBox>
          <CvcBox>
            <UpperRowLabel>CVC</UpperRowLabel>
            <UpperRowValue>{cvc}</UpperRowValue>
          </CvcBox>
          <div>
            <UpperRowLabel>EXPIRES</UpperRowLabel>
            <UpperRowValue>{formatExpires(expires)}</UpperRowValue>
          </div>
        </FlexBox>
      </UpperRow>
      <div>
        <FullName>{fullName}</FullName>
        <BottomRow>
          <CardNumber>{formatCardNumber(cardNumber)}</CardNumber>
          <img src={editIcon} />
        </BottomRow>
      </div>
    </Root>
  );
};

export default BankCard;
