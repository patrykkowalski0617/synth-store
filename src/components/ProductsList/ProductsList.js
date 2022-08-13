import React from 'react';
import productsData from '../../data/productsData';
import {
  ProductsListWrapper,
  ProductCard,
  ProductName,
  ProductPrice,
  ProductCardInnerContainer,
  ProductCardFooter,
  CartButton,
} from './PruductsList.styles';
import { FaShoppingCart } from 'react-icons/fa';

const ProductsList = () => {
  return (
    <ProductsListWrapper>
      {productsData.map(({ imgName, brand, name, price }, index) => (
        <ProductCard key={index}>
          <ProductCardInnerContainer>
            <img
              src={require(`../../assets/img/${imgName}`)}
              alt={`${brand} - ${name}`}
            />
            <ProductName>
              <span>{brand}</span> - {name}
            </ProductName>
            <ProductPrice>{price}</ProductPrice>
            <ProductCardFooter>
              <CartButton>
                <FaShoppingCart /> Cart
              </CartButton>
            </ProductCardFooter>
          </ProductCardInnerContainer>
        </ProductCard>
      ))}
    </ProductsListWrapper>
  );
};

export default ProductsList;
