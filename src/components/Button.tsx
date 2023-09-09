import clsx from 'clsx';
import { FC, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FavouriteContext } from '../context/FavouriteContext';
import SvgHeart from '../icons/Heart';
import SvgHeartRed from '../icons/HeartRed';
import '../styles/Button.scss';
import { Product } from '../type/Product';

interface IButton {
  item: Product;
  onFavouriteClick: () => void;
  onAddToCartClick: () => void;
}
export const Button: FC<IButton> = ({
  item, onFavouriteClick, onAddToCartClick,
}) => {
  const { isFavourite } = useContext(FavouriteContext);
  const { isCartItem } = useContext(CartContext);

  return (
    <div className="buttons-wrapper">
      <button
        type="button"
        className={clsx('button', { 'button-cart': isCartItem(item.phoneId) })}
        onClick={(e) => {
          e.stopPropagation();
          onAddToCartClick();
        }}
      >
        <p className={clsx('button-title',
          { 'cart-title': isCartItem(item.phoneId) })}
        >
          {isCartItem(item.phoneId) ? 'Added to cart' : 'Add to cart'}
        </p>
      </button>

      <button
        type="button"
        className="button-favourites"
        onClick={(e) => {
          e.stopPropagation();
          onFavouriteClick();
        }}
      >
        {isFavourite(item.phoneId) ? <SvgHeartRed /> : <SvgHeart /> }
      </button>
    </div>
  );
};
