import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import ProductPage from './components/pages/ProductPage/ProductPage';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/organisms/Header/Header';
import { HeaderProvider } from './components/organisms/Header/HeaderContext';
import { navigationList } from './components/molecules/Navigation/Navigation';

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
              path="/synthesizers/keyboard-synthesizers"
              element={<ProductPage />}
            />
            <Route
              path="/synthesizers/desktop-synthesizers"
              element={<ProductPage />}
            />
          </Routes>
        </BrowserRouter>
      </HeaderProvider>
    </>
  );
};

export default App;
