import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material';
import {
  ProductCardWrapper,
  ProductCard,
  ProductPrice,
  ProductName,
} from './ProductCardListing.styles';
import { Link } from 'react-router-dom';

const ProductCardListing = ({ imgName, brand, name, price, category }) => {
  return (
    <ProductCardWrapper>
      <ProductCard>
        <img
          src={require(`../../../assets/img/${category}/${imgName}`)}
          alt={`${brand} - ${name}`}
        />
        <ProductName>
          {brand.length ? (
            <>
              <span>{brand}</span> -
            </>
          ) : (
            ''
          )}{' '}
          {name}
        </ProductName>
        <Typography variant="h4">
          <ProductPrice>{price}</ProductPrice>
        </Typography>
        <Link to="/product">
          <Button variant="contained">
            <ShoppingCartIcon />
            Cart
          </Button>
        </Link>
      </ProductCard>
    </ProductCardWrapper>
  );
};

export default ProductCardListing;
