import React from 'react';
import productsData from '../../data/productsData';
import ProductCardListing from '../molecules/ProductCardListing/ProductCardListing';
import { ProductsListWrapper } from './Listing.styles';

const ProductsList = ({ listingTitle }) => {
  return (
    <>
      <div>{listingTitle}</div>
      <ProductsListWrapper>
        {productsData.map(({ imgName, brand, name, price }, i) => (
          <ProductCardListing
            key={`${brand}-${name}[${i}]`}
            imgName={imgName}
            brand={brand}
            name={name}
            price={price}
          />
        ))}
      </ProductsListWrapper>
    </>
  );
};

export default ProductsList;
