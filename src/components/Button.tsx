import { FC } from 'react';
import { useFavouriteClick } from '../helpers/useFavouriteClick';
import SvgHeart from '../icons/Heart';
import SvgHeartRed from '../icons/HeartRed';
import '../styles/Button.scss';
import { Product } from '../type/Product';

interface IButton {
  item: Product;
}

export const Button: FC<IButton> = ({ item }) => {
  const { handleFavouriteClick, isFavourite } = useFavouriteClick();

  return (
    <div className="buttons-wrapper">
      <button type="button" className="button">
        <h2 className="button-title">Add to cart</h2>
      </button>

      <button
        type="button"
        className="button-favourites"
        onClick={() => handleFavouriteClick(
          'phoneId', item.phoneId,
        )}
      >
        {isFavourite(item.phoneId) ? <SvgHeartRed /> : <SvgHeart /> }
      </button>
    </div>
  );
};
