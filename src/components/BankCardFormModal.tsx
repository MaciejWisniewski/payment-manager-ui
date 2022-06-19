import React from 'react';
import { Modal } from '@mui/material';
import BankCardForm from './BankCardForm';

interface BankCardFormModalProps {
  open: boolean;
  onClose: () => void;
}

const BankCardFormModal: React.FC<BankCardFormModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal open={open}>
      <div>
        <BankCardForm onClose={onClose} />
      </div>
    </Modal>
  );
};

export default BankCardFormModal;
