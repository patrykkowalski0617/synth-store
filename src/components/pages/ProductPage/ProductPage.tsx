import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';
import Breadcrumbs from '../../molecules/Breadcrumb/Breadcrumbs';
import ProductFilterSidebar, {
  filterSelectedOptions,
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
  const [filterOptions, setFilterOptions] = useState<FilterOptions | null>(
    null
  );

  useEffect(() => {
    setFilterOptions(null);
    setFilteredProducts([]);
    setProducts([]);
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, category));
        const productsData = querySnapshot.docs.map((doc) =>
          doc.data()
        ) as ProductCardProps[];

        const uniqueBrands = Object.entries(
          productsData.reduce((acc: Record<string, number>, product) => {
            acc[product.brand] = (acc[product.brand] || 0) + 1;
            return acc;
          }, {})
        ).map(([brand, count]) => ({ name: brand, count }));

        const prices = productsData.map((product) => product.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        setFilterOptions({
          brands: uniqueBrands,
          priceRange: [minPrice, maxPrice],
        });

        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  const handleApplyFilters = (filterSelectedOptions: filterSelectedOptions) => {
    const filteredProducts: ProductCardProps[] = products.filter((product) => {
      const isInPriceRange =
        product.price >= filterSelectedOptions.selectedPriceRange[0] &&
        product.price <= filterSelectedOptions.selectedPriceRange[1];

      const isInSelectedBrands = filterSelectedOptions.selectedBrans.length
        ? filterSelectedOptions.selectedBrans.includes(product.brand)
        : true;
      return isInPriceRange && isInSelectedBrands;
    });

    if (!filteredProducts.length) {
      alert('No products for this filters. Change filters :)');
      return;
    }
    setFilteredProducts(filteredProducts);
    const brandsWithCountRecalculate =
      filterOptions?.brands.map((brand) => {
        const count = products.filter(
          (product) =>
            product.price >= filterSelectedOptions.selectedPriceRange[0] &&
            product.price <= filterSelectedOptions.selectedPriceRange[1] &&
            product.brand === brand.name
        ).length;

        return { ...brand, count };
      }) ?? [];

    setFilterOptions((prevState) => ({
      ...prevState,
      brands: brandsWithCountRecalculate,
      priceRange: prevState?.priceRange ?? [],
    }));
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
        {filterOptions ? (
          <ProductFilterSidebar
            filterOptions={filterOptions}
            applyFilters={handleApplyFilters}
          />
        ) : (
          <p>Loading filters...</p>
        )}
        {!loading ? (
          <ProductList products={filteredProducts} category={category} />
        ) : (
          <p>Loading products...</p>
        )}
        {error && <p>An error occurred</p>}
      </Box>
    </Box>
  );
};

export default ProductPage;
