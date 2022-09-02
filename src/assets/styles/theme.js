import { createTheme } from '@mui/material/styles';
import { grey, cyan, lightGreen } from '@mui/material/colors';
import './fonts.css';

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '400',
  },
  palette: {
    primary: {
      light: cyan[100],
      main: cyan[700],
      dark: cyan[900],
      contrastText: cyan[50],
    },
    secondary: {
      light: lightGreen[100],
      main: lightGreen[500],
      dark: lightGreen[900],
      contrastText: lightGreen[50],
    },
  },
  customPalette: { grey: grey[500] },
});

export default theme;
