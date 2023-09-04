import { FC } from 'react';
import SvgHeart from '../icons/Heart';
import '../styles/Button.scss';
import { Product } from '../type/Product';

interface IButton {
  item: Product;
}

export const Button: FC<IButton> = ({ item }) => {
 
  return (
    <div className="buttons-wrapper">
      <button type="button" className="button">
        <h2 className="button-title">Add to cart</h2>
      </button>

      <button type="button" className="button-favourites">
        <SvgHeart />
      </button>
    </div>
  );
};
