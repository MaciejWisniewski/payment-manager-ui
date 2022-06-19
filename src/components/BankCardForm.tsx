import React from 'react';
import { useFormik } from 'formik';
import Input from './common/Input';
import { styled } from '@mui/system';
import { white } from '../styles/colors';
import Button from './common/Button';
import close from '../svgs/close.svg';
import { FormHelperText } from '@mui/material';
import { useBankCardStore } from '../stores/bankCardStore';

const Root = styled('form')`
  width: 100%;
  position: absolute;
  height: calc(100% - 86px);
  margin-top: 86px;
  display: flex;
  flex-direction: column;
  background: ${white};
  padding: 24px;
  border-radius: 24px;
`;

const Header = styled('div')`
  font-size: 24px;
  font-weight: bold;
`;

const Close = styled('div')`
  width: 100%;
  text-align: right;
`;

interface BankCardFormProps {
  onClose: () => void;
  onSubmit: () => void;
}

const BankCardForm: React.FC<BankCardFormProps> = ({ onClose, onSubmit }) => {
  const bankCardStore = useBankCardStore();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
    onSubmit: async (values) => {
      console.log('values: ', values);
      bankCardStore.addBankCard({
        fullName: values.fullName,
        cardNumber: values.cardNumber,
        expiryDate: new Date(values.expiryDate),
        cvc: values.cvc,
      });
      onSubmit();
    },
  });

  return (
    <Root onSubmit={formik.handleSubmit}>
      <Close>
        <img width={16} height={16} src={close} alt="close" onClick={onClose} />
      </Close>
      <Header>Add your card details</Header>
      <Input
        name="fullName"
        label="Name in card"
        autoFocus
        value={formik.values.fullName}
        onChange={formik.handleChange}
      />
      <Input
        name="cardNumber"
        label="Card number"
        value={formik.values.cardNumber}
        onChange={formik.handleChange}
      />
      <Input
        name="expiryDate"
        label="Expiry date"
        value={formik.values.expiryDate}
        onChange={formik.handleChange}
      />
      <FormHelperText>Format: 08/2022</FormHelperText>
      <Input
        name="cvc"
        label="CVC (Security code)"
        value={formik.values.cvc}
        onChange={formik.handleChange}
      />
      <Button label="Confirm" type="submit" style={{ marginTop: 40 }} />
    </Root>
  );
};

export default BankCardForm;
