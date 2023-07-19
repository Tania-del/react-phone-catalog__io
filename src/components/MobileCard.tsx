import { FC } from 'react';
import '../styles/MobileCard.scss';
import { Product } from '../type/Product';
// import ProductImages from '../../public/img/phones';

interface IMobileCard {
  item: Product;
}

export const MobileCard: FC<IMobileCard> = ({ item }) => {
  const {
    image,
    name,
    price,
    fullPrice,
  } = item;

  return (
    <>
      <li className="card">
        <img className="card-img" src={image} alt="img" />
        <div className="card-container">
          <div>
            <h3 className="card-title">{name}</h3>
            <div className="card-price__wrapper">
              <p className="card-price">{`$${price}`}</p>
              <p className="card-full__price">{`$${fullPrice}`}</p>
            </div>
            <div className="underline" />
          </div>
        </div>
      </li>
    </>
  );
};
