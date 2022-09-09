import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material';

const ProductCard = ({ imgName, brand, name, price, category }) => {
  return (
    <>
      <img
        src={require(`../../../assets/img/${category}/${imgName}`)}
        alt={`${brand} - ${name}`}
      />
      <p></p>
      <Typography variant="h4">
        <p>{price}</p>
      </Typography>
      <Button variant="contained">
        <ShoppingCartIcon />
        Cart
      </Button>
    </>
  );
};

export default ProductCard;
