import { FC } from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const ProductList: FC = () => {
  return (
    <div>
      <ProductCard
        id={0}
        name="name"
        description="description"
        price={10099}
        imageUrl="https://www.perfectcircuit.com/media/catalog/product/cache/b378f08a9087a3d18ef7e68ded1ec09c/G/i/Gieskes_man_N13-08681_01.jpg 1x,  https://www.perfectcircuit.com/media/catalog/product/cache/7588282da321f119f29ab27968b2356b/G/i/Gieskes_man_N13-08681_01.jpg 2x,  https://www.perfectcircuit.com/media/catalog/product/cache/72aae7548d5bc6a4002a8be8cdca573d/G/i/Gieskes_man_N13-08681_01.jpg"
        onAddToCart={() => {}}
      />
    </div>
  );
};

export default ProductList;
