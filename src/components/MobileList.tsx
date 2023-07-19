import { FC } from 'react';
import SvgArrowLeft from '../icons/ArrowLeft';
import SvgArrowRight from '../icons/ArrowRight';
import '../styles/MobileList.scss';
import { Product } from '../type/Product';
import { MobileCard } from './MobileCard';

interface IMobileList {
  list: Product[];
}
export const MobileList: FC<IMobileList> = ({ list }) => {
  return (
    <section className="phones">
      <div className="phones-wrapper">
        <h1 className="phones-text">Hot prices</h1>
        <div className="arrow-img__wrapper">
          <button type="button" className="arrow-btn">
            <SvgArrowLeft />
          </button>
          <button type="button" className="arrow-btn">
            <SvgArrowRight />
          </button>
        </div>
      </div>
      <div className="phones-container">
        <ul className="phones-list">
          {list.map((item) => <MobileCard item={item} />)}
        </ul>
      </div>
    </section>
  );
};
