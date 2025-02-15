import { FC, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';
import Breadcrumbs from '../../molecules/Breadcrumb/Breadcrumbs';
import { ProductCardProps } from '../../molecules/ProductCard/ProductCard';
import ProductList from '../../organisms/ProductList/ProductList';
import ProductFilterSidebar from '../../organisms/ProductFilterSidebar/ProductFilterSidebar';
import { Box } from '@mui/material';

export type ProductPageProps = {
  category: string;
};

const ProductPage: FC<ProductPageProps> = ({ category }) => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [brands, setBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, category));
        const productsData: ProductCardProps[] = querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        ) as ProductCardProps[];

        const uniqueBrands = Array.from(
          new Set(productsData.map((product) => product.brand))
        );
        setBrands(uniqueBrands);

        const prices = productsData.map((product) => product.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        setPriceRange([minPrice, maxPrice]);

        setProducts(productsData);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box sx={{ padding: 2 }}>
      <Breadcrumbs />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 1,
          mt: 2,
        }}
      >
        <ProductFilterSidebar
          filters={{
            brands,
            priceRange,
          }}
          onFilterChange={() => {}}
        />

        <ProductList products={products} category={category} />
      </Box>
    </Box>
  );
};

export default ProductPage;
