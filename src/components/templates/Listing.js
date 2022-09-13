import React from 'react';
import { productsData } from '../../mokcs/data/productsData';
import ProductCardListing from '../molecules/ProductCardListing/ProductCardListing';
import { ProductsListWrapper } from './Listing.styles';

const ProductsList = ({ listingTitle }) => {
  // const category = 'desktop_synths';
  // const category = 'keyboard_synths';
  // const category = 'cables';

  const category = 'headphones';
  return (
    <>
      <div>{listingTitle}</div>
      <ProductsListWrapper>
        {productsData[category].map(({ imgName, brand, name, price }, i) => (
          <ProductCardListing
            key={`${brand}-${name}[${i}]`}
            imgName={imgName}
            brand={brand}
            name={name}
            price={price}
            category={category}
          />
        ))}
      </ProductsListWrapper>
    </>
  );
};

export default ProductsList;
