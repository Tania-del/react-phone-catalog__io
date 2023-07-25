import { FC, useState } from 'react';
import SvgArrowLeft from '../icons/ArrowLeft';
import SvgArrowRight from '../icons/ArrowRight';
import '../styles/MobileList.scss';
import { MobileCard } from './MobileCard';
import { Product } from '../type/Product';

interface IMobileList {
  products: Product[];
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-shadow
export const MobileList: FC<IMobileList> = ({ products, title = 'title' }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const phonesPerPage = 4;
  const startIndex = (currentPage - 1) * phonesPerPage;
  const endIndex = startIndex + phonesPerPage;
  const phonesToRender = products.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (endIndex < products.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <section className="phones">
      <div className="phones-wrapper">
        <h1 className="phones-text">{title}</h1>
        <div className="arrow-img__wrapper">
          <button type="button" className="arrow-btn" onClick={handlePrevClick}>
            <SvgArrowLeft className="arrow-image" />
          </button>
          <button type="button" className="arrow-btn" onClick={handleNextClick}>
            <SvgArrowRight className="arrow-image" />
          </button>
        </div>
      </div>
      <div className="phones-container">
        <ul className="phones-list">
          {phonesToRender.map(
            (item) => (
              <MobileCard
                item={item}
                key={item.id}
              />
            ),
          )}
        </ul>
      </div>
    </section>
  );
};
