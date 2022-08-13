import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import ProductsList from '../components/ProductsList/ProductsList';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsList />
    </ThemeProvider>
  );
}

export default Root;
