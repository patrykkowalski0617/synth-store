import { FC } from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import { ProductCardProps } from '../../molecules/ProductCard/ProductCard';

export type ProductListProps = {
  products: ProductCardProps[];
  category: string;
};

const ProductList: FC<ProductListProps> = ({ products, category }) => {
  return (
    <>
      {products.map(({ id, name, brand, price, imgName }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          brand={brand}
          price={price}
          imgName={imgName}
          category={category}
          onAddToCart={() => {
            console.log('onAddToCart');
          }}
        />
      ))}
    </>
  );
};

export default ProductList;
