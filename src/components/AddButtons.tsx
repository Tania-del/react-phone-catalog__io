import clsx from 'clsx';
import { FC, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FavouriteContext } from '../context/FavouriteContext';
import SvgHeart from '../icons/Heart';
import SvgHeartRed from '../icons/HeartRed';
import '../styles/AddButtons.scss';

interface IAddButtons {
  id: string
  onFavouriteClick: () => void;
  onAddToCartClick: () => void;
  // eslint-disable-next-line react/require-default-props
  customStyle?: string;
}
export const AddButtons: FC<IAddButtons> = ({
  id,
  onFavouriteClick,
  onAddToCartClick,
  customStyle = '',
}) => {
  const { isFavourite } = useContext(FavouriteContext);
  const { isCartItem } = useContext(CartContext);

  return (
    <div className="buttons-wrapper">
      <button
        type="button"
        className={clsx('button', customStyle, {
          'button-cart': isCartItem(id),
        })}
        onClick={(e) => {
          e.stopPropagation();
          onAddToCartClick();
        }}
      >
        <p
          className={clsx('button-title', {
            'cart-title': isCartItem(id),
          })}
        >
          {isCartItem(id)
            ? 'Added to cart' : 'Add to cart'}
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
        {isFavourite(id)
          ? <SvgHeartRed /> : <SvgHeart />}
      </button>
    </div>
  );
};
