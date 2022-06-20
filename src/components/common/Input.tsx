import React from 'react';
import { FormHelperText, TextField } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled('div')`
  margin-top: 40px;
`;

interface InputProps {
  name: string;
  label: string;
  autoFocus?: boolean;
  value: any;
  error?: string;
  color?: 'success' | 'error';
  focused?: boolean;
  onBlur: (e: React.FocusEvent<any, Element>) => void;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Input: React.FC<InputProps> = ({ name, error, ...rest }) => {
  return (
    <Root>
      <TextField id={name} name={name} variant="standard" fullWidth {...rest} />
      <FormHelperText error>{error}</FormHelperText>
    </Root>
  );
};

export default Input;
