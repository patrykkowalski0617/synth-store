import ProductsList from '../components/ProductsList/ProductsList';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../assets/styles/theme';
import globalStyles from '../assets/styles/globalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <ProductsList />
    </ThemeProvider>
  );
}

export default Root;
