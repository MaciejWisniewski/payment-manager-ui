import React from 'react';
import { Modal } from '@mui/material';
import BankCardForm from './BankCardForm';
import { InitialBankCardFormValues } from '../types/initialBankCardFormValues';

interface BankCardFormModalProps {
  open: boolean;
  initialFormData?: InitialBankCardFormValues;
  onClose: () => void;
  onSubmit: () => void;
}

const BankCardFormModal: React.FC<BankCardFormModalProps> = ({
  open,
  initialFormData,
  onClose,
  onSubmit,
}) => {
  return (
    <Modal open={open}>
      <div>
        <BankCardForm
          initialValues={initialFormData}
          onClose={onClose}
          onSubmit={onSubmit}
        />
      </div>
    </Modal>
  );
};

export default BankCardFormModal;
