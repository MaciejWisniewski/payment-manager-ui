import { createTheme } from '@mui/material';
import { green, purple, red } from './colors';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: purple[60],
    },
    success: {
      main: green[30],
    },
    error: {
      main: red[30],
    },
  },
});
