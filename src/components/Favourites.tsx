import { useContext } from 'react';
import products from '../products.json';
import { MobileCard } from './MobileCard';
import { useCardClick } from '../helpers/useCardClick';
import '../styles/Favourites.scss';
import { FavouriteContext } from '../context/FavouriteContext';
import { filterByQuery } from '../utils/filterUtils';
import { SearchContext } from '../context/SearchContext';
import { ErrorMessageContext } from '../context/ErrorMessageContext';
import { Product } from '../type/Product';

export const Favourites = () => {
  const { favourites } = useContext(FavouriteContext);
  const { handleCardClick } = useCardClick();
  const { inputValue } = useContext(SearchContext);
  const { inputErrorMessage, setInputErrorMessage }
    = useContext(ErrorMessageContext);

  const filteredByFavourites = products.filter(
    (product) => favourites.includes(product.phoneId),
  );

  filterByQuery(filteredByFavourites, inputValue, setInputErrorMessage);

  return (
    <>
      <h1 className="phones-text">Favourites</h1>
      <p className="about-text" style={{ margin: '8px 0 40px' }}>
        {`${favourites.length} items`}
      </p>
      <div className="favourites-wrapper">
        {inputErrorMessage && <p>{inputErrorMessage}</p>}
        <div className="products-wrapper">
          <section className="products">
            <ul className="products-list">
              {filteredByFavourites?.map((product: Product) => (
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
