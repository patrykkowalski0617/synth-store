import React from 'react';
import Breadcrumbs from '../../molecules/Breadcrumb/Breadcrumbs';

type ProductPageProps = {
  category: string;
};

const ProductPage: React.FC<ProductPageProps> = ({ category }) => {
  return (
    <div>
      <Breadcrumbs />
      <h1>Welcome to the {category}</h1>;
    </div>
  );
};

export default ProductPage;
