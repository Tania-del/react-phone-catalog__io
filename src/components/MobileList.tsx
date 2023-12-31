/* eslint-disable max-len */
import { FC } from 'react';
import SvgArrowLeft from '../icons/ArrowLeft';
import SvgArrowRight from '../icons/ArrowRight';
import '../styles/MobileList.scss';
// import { MobileCard } from './MobileCard';
import { Product } from '../type/Product';
import { MobileCard } from './MobileCard';
import { PhonesSlider } from './PhonesSlider';
import { useCardClick } from '../helpers/useCardClick';

interface IMobileList {
  products: Product[];
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-shadow
export const MobileList: FC<IMobileList> = ({
  products = [],
  title = 'title',
}) => {
  const { handleCardClick } = useCardClick();
  // eslint-disable-next-line @typescript-eslint/no-shadow

  return (
    <section className="phones">
      <PhonesSlider
        items={products}
        spaceBetween={16}
        numberOfVisibleItems={4}
        topLineButtons={(prevButton, nextButton) => (
          <div className="arrow-img__wrapper">
            <h1 className="phones-text">{title}</h1>
            <div className="phones-btn__wrapper">
              <button type="button" onClick={prevButton} className="arrow-btn">
                <SvgArrowLeft className="arrow-image" />
              </button>
              <button type="button" onClick={nextButton} className="arrow-btn">
                <SvgArrowRight className="arrow-image" />
              </button>
            </div>
          </div>
        )}
      >
        {(item) => (
          <div className="card">
            <MobileCard item={item} onClick={() => handleCardClick(item.phoneId)} />
          </div>
        )}
      </PhonesSlider>
    </section>
  );
};
