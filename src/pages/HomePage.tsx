import '../styles/Container.scss';
import { useState, useEffect } from 'react';
import { Banner } from '../components/Banner';
import { Category } from '../components/Category';
import { MobileList } from '../components/MobileList';
import products from '../products.json';
import { Product } from '../type/Product';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  const [brandNewProducts, setBrandNewProducts] = useState<Product[]>([]);

  // eslint-disable-next-line no-console

  useEffect(() => {
    const getBrandNewProducts = products.filter(
      // eslint-disable-next-line no-prototype-builtins
      (product => !product.hasOwnProperty('fullPrice')),
    );

    setBrandNewProducts(getBrandNewProducts.sort((a, b) => b.price - a.price));
  }, []);

  return (
    <>
      <div className="main-container">
        <Banner />
        <MobileList products={products} title="Hot prices" />
        <Category title="Shop by category" />
        <MobileList products={brandNewProducts} title="Brand new models" />
      </div>
      <Footer />
    </>
  );
};
