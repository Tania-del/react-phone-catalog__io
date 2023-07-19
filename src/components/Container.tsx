import '../styles/Container.scss';
import Banner from './Banner';
import Category from './Category';
import { MobileList } from './MobileList';
import array from '../products.json';

export default function Container() {
  return (
    <div className="main-container">
      <Banner />
      <MobileList list={array} />
      <Category />
      <MobileList list={array} />
    </div>
  );
}
