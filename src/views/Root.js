import ProductsList from '../components/ProductsList/ProductsList';
import MenuBar from '../components/MenuBar/MenuBar';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../assets/styles/theme';
import globalStyles from '../assets/styles/globalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <MenuBar />

        <ProductsList />
      </ThemeProvider>
    </Router>
  );
}

export default Root;
