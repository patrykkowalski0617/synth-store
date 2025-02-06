import { FC, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';
import Breadcrumbs from '../../molecules/Breadcrumb/Breadcrumbs';
import { ProductCardProps } from '../../molecules/ProductCard/ProductCard';
import ProductList from '../../organisms/ProductList/ProductList';

export type ProductPageProps = {
  category: string;
};

const ProductPage: FC<ProductPageProps> = ({ category }) => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log('category', category);
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
    <div>
      <Breadcrumbs />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        <ProductList products={products} category={category} />
      </div>
    </div>
  );
};

export default ProductPage;
