import { styled } from '@mui/system';
import React from 'react';
import { purple, white } from '../../styles/colors';

const Root = styled('button')`
  background-color: ${purple[60]};
  color: ${white};
  padding: 24px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border-radius: 100px;
  border: unset;
`;

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <Root>{label}</Root>;
};

export default Button;
