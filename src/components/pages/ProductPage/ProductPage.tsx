import React from 'react';

type ProductPageProps = {
  category: string;
};

const ProductPage: React.FC<ProductPageProps> = ({ category }) => {
  return <h1>Welcome to the {category}</h1>;
};

export default ProductPage;
