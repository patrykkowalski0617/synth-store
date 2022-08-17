import React from 'react';
import productsData from '../../data/productsData';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import {
  ProductsListWrapper,
  ProductCardWrapper,
  ProductPrice,
  ProductCard,
} from './PruductsList.styles';

const ProductsList = () => {
  return (
    <ProductsListWrapper>
      {productsData.map(({ imgName, brand, name, price }, index) => (
        <ProductCardWrapper key={index}>
          <ProductCard>
            <img
              src={require(`../../assets/img/${imgName}`)}
              alt={`${brand} - ${name}`}
            />
            <p>
              <span>{brand}</span> - {name}
            </p>
            <ProductPrice>{price}</ProductPrice>
            <div>
              <Button variant="outlined">
                <ShoppingCartIcon />
                Cart
              </Button>
            </div>
          </ProductCard>
        </ProductCardWrapper>
      ))}
    </ProductsListWrapper>
  );
};

export default ProductsList;
