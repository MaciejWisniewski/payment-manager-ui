import { styled } from '@mui/system';
import React, { CSSProperties } from 'react';
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

  &:disabled {
    opacity: 0.6;
  }
`;

interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, type = 'button', ...rest }) => {
  return (
    <Root type={type} {...rest}>
      {label}
    </Root>
  );
};

export default Button;
