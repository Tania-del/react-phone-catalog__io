import { useMemo, useContext } from 'react';
import products from '../products.json';
import { MobileCard } from './MobileCard';
import { useCardClick } from '../helpers/useCardClick';
import '../styles/Favourites.scss';
import { FavouriteContext } from '../context/FavouriteContext';
import { filterByQuery } from '../utils/filterUtils';
import { SearchContext } from '../context/SearchContext';
import { ErrorMessageContext } from '../context/ErrorMessageContext';

export const Favourites = () => {
  const { favourites } = useContext(FavouriteContext);
  const { handleCardClick } = useCardClick();
  const { inputValue } = useContext(SearchContext);
  const { inputErrorMessage, setInputErrorMessage }
    = useContext(ErrorMessageContext);

  const filteredProducts = useMemo(() => {
    const filteredByFavourites = products.filter(
      (product) => favourites.includes(product.phoneId),
    );

    return filterByQuery(
      filteredByFavourites, inputValue, setInputErrorMessage,
    );
  }, [favourites, inputValue]);

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
        {inputErrorMessage && <p>{inputErrorMessage}</p>}
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
