import { FC, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';
import Breadcrumbs from '../../molecules/Breadcrumb/Breadcrumbs';
import { ProductCardProps } from '../../molecules/ProductCard/ProductCard';
import ProductList from '../../organisms/ProductList/ProductList';
import ProductFilterSidebar, {
  FilterOptions,
} from '../../organisms/ProductFilterSidebar/ProductFilterSidebar';
import { Box } from '@mui/material';

export type ProductPageProps = {
  category: string;
};

const ProductPage: FC<ProductPageProps> = ({ category }) => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, category));
        console.log('querySnapshot', querySnapshot);
        const productsData: ProductCardProps[] = querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        ) as ProductCardProps[];
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
      {/* Breadcrumbs always at the top */}
      <Breadcrumbs />

      {/* Layout: Filters (Top on Mobile, Left on Desktop) & Product List */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          marginTop: 2,
        }}
      >
        {/* Filters - Top on Mobile, Left on Desktop */}
        <Box
          sx={{
            width: { xs: '100%', sm: '240px' },
            flexShrink: 0,
          }}
        >
          <ProductFilterSidebar
            brands={['a', 'b']}
            filters={{
              brands: [],
              priceRange: [0, 5000],
            }}
            onFilterChange={() => {}}
          />
        </Box>

        {/* Product List - Below Filters on Mobile, Right on Desktop */}
        <Box sx={{ flexGrow: 1 }}>
          <ProductList products={products} category={category} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
