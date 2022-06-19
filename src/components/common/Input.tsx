import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled('div')`
  margin-top: 40px;
`;

interface InputProps {
  name: string;
  label: string;
  autoFocus?: boolean;
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <Root>
      <TextField id={name} name={name} variant="standard" fullWidth {...rest} />
    </Root>
  );
};

export default Input;
