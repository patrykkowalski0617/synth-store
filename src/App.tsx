import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import ProductPage from './components/pages/ProductPage/ProductPage';
import Navigation from './components/molecules/Navigation/Navigation';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
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
  );
};

export default App;
