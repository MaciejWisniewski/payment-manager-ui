import React from 'react';
import { Modal } from '@mui/material';
import BankCardForm from './BankCardForm';

interface BankCardFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const BankCardFormModal: React.FC<BankCardFormModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  return (
    <Modal open={open}>
      <div>
        <BankCardForm onClose={onClose} onSubmit={onSubmit} />
      </div>
    </Modal>
  );
};

export default BankCardFormModal;
