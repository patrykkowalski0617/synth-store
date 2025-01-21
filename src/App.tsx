import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import ProductPage from './components/pages/ProductPage/ProductPage';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/organisms/Header/Header';
import { HeaderProvider } from './components/organisms/Header/HeaderContext';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <HeaderProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products/keyboard-synthesizers"
              element={<ProductPage category="Keyboard Synthesizers" />}
            />
            <Route
              path="/products/desktop-synthesizers"
              element={<ProductPage category="Desktop Synthesizers" />}
            />
          </Routes>
        </BrowserRouter>
      </HeaderProvider>
    </>
  );
};

export default App;
