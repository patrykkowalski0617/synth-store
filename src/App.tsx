import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import ProductPage from './components/pages/ProductPage/ProductPage';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/organisms/Header/Header';
import { HeaderProvider } from './components/organisms/Header/HeaderContext';
import { Toolbar } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <HeaderProvider>
        <BrowserRouter>
          <Header />
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/synthesizers/keyboard-synthesizers"
              element={<ProductPage category="keyboard_synths" />}
            />
            <Route
              path="/synthesizers/desktop-synthesizers"
              element={<ProductPage category="desktop_synths" />}
            />
          </Routes>
        </BrowserRouter>
      </HeaderProvider>
    </>
  );
};

export default App;
