import NavBar from '../organisms/NavBar/NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../assets/styles/theme';
import globalStyles from '../../assets/styles/globalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import DesktopSynth from './DesktopSynth';
import KeyboardSynth from './KeyboardSynth';
import Accessories from './Accessories';

const inputGlobalStyles = <GlobalStyles styles={globalStyles} />;

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {inputGlobalStyles}
        <GlobalStyles styles={globalStyles} />
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/desktop_synths" element={<DesktopSynth />} />
          <Route path="/keyboard_synths" element={<KeyboardSynth />} />
          <Route path="/accesories" element={<Accessories />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
