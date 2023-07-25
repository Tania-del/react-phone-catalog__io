import '../styles/Container.scss';
import { Banner } from '../components/Banner';
import { Category } from '../components/Category';
import { MobileList } from '../components/MobileList';
import products from '../products.json';

export const HomePage = () => {
  return (
    <div className="main-container">
      <Banner />
      <MobileList products={products} title="Hot prices" />
      <Category title="Shop by category" />
      <MobileList products={products} title="Brand new models" />
    </div>
  );
};
