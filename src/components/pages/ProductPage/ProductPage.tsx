import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { collection, count, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';
import Breadcrumbs from '../../molecules/Breadcrumb/Breadcrumbs';
import ProductFilterSidebar, {
  FilterOptions,
} from '../../organisms/ProductFilterSidebar/ProductFilterSidebar';
import ProductList from '../../organisms/ProductList/ProductList';
import { ProductCardProps } from '../../molecules/ProductCard/ProductCard';

export type ProductPageProps = {
  category: string;
};

const ProductPage: FC<ProductPageProps> = ({ category }) => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductCardProps[]>(products);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filterAllOptions, setFitlterAllOptions] =
    useState<FilterOptions | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, category));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProductCardProps[];
        const uniqueBrands = Array.from(
          productsData.reduce((acc, product) => {
            acc.set(product.brand, (acc.get(product.brand) || 0) + 1);
            return acc;
          }, new Map<string, number>())
        )
          .map(([brand, count]) => ({ brand, count, isSelected: false }))
          .sort((a, b) => a.brand.localeCompare(b.brand));

        const prices = productsData.map((product) => product.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        setFitlterAllOptions({
          brands: uniqueBrands,
          priceRange: [minPrice, maxPrice],
        });

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

  const handleFilterChange = (appliedFilters: FilterOptions) => {
    const filteredProducts: ProductCardProps[] = products.filter((product) => {
      const isInPriceRange =
        product.price >= appliedFilters.priceRange[0] &&
        product.price <= appliedFilters.priceRange[1];

      const isInSelectedBrands = appliedFilters.brands.length
        ? appliedFilters.brands.some((brand) => brand.brand === product.brand)
        : true;
      return isInPriceRange && isInSelectedBrands;
    });

    if (!filteredProducts.length) {
      alert('No products for this filters. Change filters :)');
    }
    setFilteredProducts(filteredProducts);
  };
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
        {filterAllOptions ? (
          <ProductFilterSidebar
            filterAllOptions={filterAllOptions}
            onFilterChange={handleFilterChange}
          />
        ) : (
          <p>Loading filters...</p>
        )}
        <ProductList
          products={filteredProducts.length ? filteredProducts : products}
          category={category}
        />
      </Box>
    </Box>
  );
};

export default ProductPage;
