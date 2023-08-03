/* eslint-disable max-len */
import { FC } from 'react';
import SvgArrowLeft from '../icons/ArrowLeft';
import SvgArrowRight from '../icons/ArrowRight';
import '../styles/MobileList.scss';
// import { MobileCard } from './MobileCard';
import { Product } from '../type/Product';
import { MobileCard } from './MobileCard';
import { PhonesSlider } from './PhonesSlider';

interface IMobileList {
  products: Product[];
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-shadow
export const MobileList: FC<IMobileList> = ({
  products = [],
  title = 'title',
}) => {
  return (
    <section className="phones">
      <div className="phones-wrapper">
        <h1 className="phones-text">{title}</h1>
      </div>
      <PhonesSlider
        items={products}
        // perPage={4}
        spaceBetween={16}
        topLineButtons={(prevButton, nextButton) => (
          <div className="arrow-img__wrapper">
            <button type="button" onClick={prevButton} className="arrow-btn">
              <SvgArrowLeft className="arrow-image" />
            </button>
            <button type="button" onClick={nextButton} className="arrow-btn">
              <SvgArrowRight className="arrow-image" />
            </button>
          </div>
        )}
      >
        {(item) => (
          <div className="card">
            <MobileCard item={item} />
          </div>
        )}
      </PhonesSlider>
    </section>
  );
};
