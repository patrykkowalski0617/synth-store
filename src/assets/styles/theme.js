import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import './fonts.css';

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  palette: {
    primary: {
      light: '#ff0000',
      main: '#ff0000',
      dark: '#ff0000',
      contrastText: '#ff0000',
    },
    secondary: {
      light: '#ff0000',
      main: '#ff0000',
      dark: '#ff0000',
      contrastText: '#ff0000',
    },
    grey: grey[500],
  },
});

export default theme;
