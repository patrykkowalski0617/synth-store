import React from 'react';
import productsData from '../../data/productsData';

const ProductsList = () => {
  return (
    <>
      {productsData.map(({ imgName, brand, name, price }) => (
        <div>
          <img src={require(`../../assets/img/${imgName}`)} />
          <p>
            {brand} - {name}
          </p>
          <p>{price}</p>
        </div>
      ))}
    </>
  );
};

export default ProductsList;
