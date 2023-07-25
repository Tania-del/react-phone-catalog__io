import SvgHeart from '../icons/Heart';
import '../styles/Button.scss';

export const Button = () => {
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
