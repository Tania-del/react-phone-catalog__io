import { useMemo, useContext } from 'react';
import products from '../products.json';
import { MobileCard } from './MobileCard';
import { useCardClick } from '../helpers/useCardClick';
import '../styles/Favourites.scss';
import { FavouriteContext } from '../context/FavouriteContext';

export const Favourites = () => {
  const { favourites } = useContext(FavouriteContext);
  const { handleCardClick } = useCardClick();

  const filteredProducts = useMemo(
    () => products.filter((product) => favourites.includes(product.phoneId)),
    [favourites],
  );

  return (
    <>
      <h1 className="phones-text">Favourites</h1>
      <p
        className="about-text"
        style={{ margin: '8px 0 40px' }}
      >
        {`${favourites.length} items`}
      </p>
      <div className="favourites-wrapper">
        <div className="products-wrapper">
          <section className="products">
            <ul className="products-list">
              {filteredProducts?.map((product) => (
                <MobileCard
                  item={product}
                  key={product.id}
                  onClick={() => handleCardClick(product.phoneId)}
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
