import { Footer } from '../components/Footer';
import { ProductsList } from '../components/ProductsList';
import products from '../products.json';

export const PhonesPage = () => {
  return (
    <>
      <div className="main-container">
        <ProductsList products={products} title="Mobile phones" />
      </div>
      <Footer />
    </>
  );
};
