import { FC } from 'react';
import '../styles/MobileCard.scss';
import { Product } from '../type/Product';
import { Button } from './Button';

interface IMobileCard {
  item: Product;
}

export const MobileCard: FC<IMobileCard> = ({ item }) => {
  const {
    name,
    price,
    screen,
    capacity,
    ram,
    image,
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
          <Button />
        </div>
      </li>
    </>
  );
};
