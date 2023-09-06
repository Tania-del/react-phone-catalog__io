import { FC, useContext } from 'react';
import { FavouriteContext } from '../context/FavouriteContext';
import SvgHeart from '../icons/Heart';
import SvgHeartRed from '../icons/HeartRed';
import '../styles/Button.scss';
import { Product } from '../type/Product';

interface IButton {
  item: Product;
  onFavouriteClick: () => void;
}

export const Button: FC<IButton> = ({ item, onFavouriteClick }) => {
  const { isFavourite } = useContext(FavouriteContext);

  return (
    <div className="buttons-wrapper">
      <button type="button" className="button">
        <h2 className="button-title">Add to cart</h2>
      </button>

      <button
        type="button"
        className="button-favourites"
        onClick={(e) => {
          e.stopPropagation();
          onFavouriteClick();
          // console.log(isFavourite(item.phoneId), favouri);
        }}
      >
        {isFavourite(item.phoneId) ? <SvgHeartRed /> : <SvgHeart /> }
      </button>
    </div>
  );
};
