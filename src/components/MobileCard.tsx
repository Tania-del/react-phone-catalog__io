import { useContext, FC } from 'react';
import { LOCALSTORAGE_KEYS } from '../constants/comman';
import { CartContext } from '../context/CartContext';
import { FavouriteContext } from '../context/FavouriteContext';
import '../styles/MobileCard.scss';
import { Product } from '../type/Product';
import { AddButtons } from './AddButtons';

interface IMobileCard {
  item: Product;
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

export const MobileCard: FC<IMobileCard> = ({ item, onClick }) => {
  const {
    name, price, screen, capacity, ram, image, fullPrice,
  } = item;

  const { addToFavourite } = useContext(FavouriteContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div
        className="card mobile-card"
        onClick={onClick}
        role="button"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onClick?.();
          }
        }}
        tabIndex={0}
      >
        <li>
          <img className="card-img" src={`/${image}`} alt="img" />
          <div className="card-container">
            <div>
              <h3 className="card-title">{name}</h3>
              <div className="card-price__wrapper">
                <p className="card-price">{`$${price}`}</p>
                {fullPrice ? (
                  <p className="card-full__price">{`$${fullPrice}`}</p>
                ) : (
                  ''
                )}
              </div>
              <div className="underline" />
            </div>
            <div className="card-description">
              <div>
                <p className="description-title">Screen</p>
                <p className="description-title">Capacity</p>
                <p className="description-title">RAM</p>
              </div>
              <div>
                <p className="description-text">{screen}</p>
                <p className="description-text">{capacity}</p>
                <p className="description-text">{ram}</p>
              </div>
            </div>
            <AddButtons
              id={item.phoneId}
              // eslint-disable-next-line max-len
              onAddToCartClick={() => addToCart(item.phoneId)}
              // eslint-disable-next-line max-len
              onFavouriteClick={() => addToFavourite(LOCALSTORAGE_KEYS.phoneId, item.phoneId)}
            />
          </div>
        </li>
      </div>
    </>
  );
};
