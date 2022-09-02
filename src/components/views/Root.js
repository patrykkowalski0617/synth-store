import ProductsList from '../organisms/ProductsList/ProductsList';
import NavBar from '../organisms/NavBar/NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../assets/styles/theme';
import globalStyles from '../../assets/styles/globalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

const inputGlobalStyles = <GlobalStyles styles={globalStyles} />;

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {inputGlobalStyles}
        <GlobalStyles styles={globalStyles} />
        <NavBar />
        <ProductsList />
      </ThemeProvider>
    </Router>
  );
}

export default Root;
