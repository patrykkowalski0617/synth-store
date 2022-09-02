import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material';
import {
  ProductCardWrapper,
  ProductCard,
  ProductPrice,
  ProductName,
} from './ProductCardListing.styles';

const ProductCardListing = ({ imgName, brand, name, price }) => {
  return (
    <ProductCardWrapper>
      <ProductCard>
        <img
          src={require(`../../../assets/img/${imgName}`)}
          alt={`${brand} - ${name}`}
        />
        <ProductName>
          <span>{brand}</span> - {name}
        </ProductName>
        <Typography variant="h4">
          <ProductPrice>{price}</ProductPrice>
        </Typography>
        <Button variant="contained">
          <ShoppingCartIcon />
          Cart
        </Button>
      </ProductCard>
    </ProductCardWrapper>
  );
};

export default ProductCardListing;
