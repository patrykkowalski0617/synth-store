import { FC, CSSProperties } from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import { ProductCardProps } from '../../molecules/ProductCard/ProductCard';

export type ProductListProps = {
  products: ProductCardProps[];
  category: string;
};

const ProductListStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '20px',
  width: '100%',
  height: 'fit-content',
};

const ProductList: FC<ProductListProps> = ({ products, category }) => {
  return (
    <div style={ProductListStyle}>
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
    </div>
  );
};

export default ProductList;
