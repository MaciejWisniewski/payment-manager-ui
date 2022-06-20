import React from 'react';
import { useFormik } from 'formik';
import Input from './common/Input';
import { styled } from '@mui/system';
import { white } from '../styles/colors';
import Button from './common/Button';
import close from '../svgs/close.svg';
import { FormHelperText } from '@mui/material';
import { useBankCardStore } from '../stores/bankCardStore';
import * as Yup from 'yup';

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

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(
      /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i,
      'Please fill in first name and surname'
    )
    .required('Please fill in your name'),
  cardNumber: Yup.string()
    .matches(/^\s*(?:\d\s*){16}$/i, 'Card number must be exactly 16 digit long')
    .required('Please fill in card number'),
  expiryDate: Yup.string()
    .matches(
      /[0-9][0-9][/][0-9][0-9]$/i,
      'Please fill in the date in valid format'
    )
    .required('Please fill in expiry date'),
  cvc: Yup.string()
    .matches(/^[0-9]{3}$/i, 'CVC must be a 3 digit number')
    .required('Please fill in CVC number'),
});

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
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const [month, year] = values.expiryDate.split('/');
      bankCardStore.addBankCard({
        fullName: values.fullName,
        cardNumber: values.cardNumber,
        expiryDate: new Date(parseInt(year), parseInt(month)),
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
        value={formik.values.fullName}
        error={formik.errors.fullName}
        color={formik.errors.fullName ? 'error' : 'success'}
        focused={formik.touched.fullName}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      <Input
        name="cardNumber"
        label="Card number"
        value={formik.values.cardNumber}
        error={formik.errors.cardNumber}
        color={formik.errors.cardNumber ? 'error' : 'success'}
        focused={formik.touched.cardNumber}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      <Input
        name="expiryDate"
        label="Expiry date"
        value={formik.values.expiryDate}
        error={formik.errors.expiryDate}
        color={formik.errors.expiryDate ? 'error' : 'success'}
        focused={formik.touched.expiryDate}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      <FormHelperText>Format: 08/22</FormHelperText>
      <Input
        name="cvc"
        label="CVC (Security code)"
        value={formik.values.cvc}
        error={formik.errors.cvc}
        color={formik.errors.cvc ? 'error' : 'success'}
        focused={formik.touched.cvc}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      <Button
        label="Confirm"
        type="submit"
        style={{ marginTop: 40 }}
        disabled={!(formik.dirty && formik.isValid)}
      />
    </Root>
  );
};

export default BankCardForm;
