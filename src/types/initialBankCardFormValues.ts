import { BankCard } from './bankCard';
import { Modify } from './modify';

export type InitialBankCardFormValues = Modify<
  BankCard,
  { expiryDate: string }
>;
