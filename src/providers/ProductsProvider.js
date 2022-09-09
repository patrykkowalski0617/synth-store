import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = React.createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/desktop_synths')
      .then(({ data }) => setProducts(data.desktop_synths))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
