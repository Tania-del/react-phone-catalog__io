import { FC } from 'react';
import '../styles/Category.scss';
import phones from '../images/Phones.png';
import tablets from '../images/Tablets.png';
import accessories from '../images/Accessories.png';

interface ICategory {
  title: string;
}
export const Category: FC<ICategory> = ({ title }) => {
  return (
    <section className="category">
      <h1 className="phones-text">{title}</h1>
      <div className="category-img__wrapper">
        <div className="category-wrapper">
          <img src={phones} alt="phones" />
          <h2 className="category-title
          category-title__first"
          >
            Mobile phones
          </h2>
          <p className="category-text">95 models</p>

        </div>
        <div className="category-wrapper">
          <img src={tablets} alt="tablets" />
          <h2 className="category-title">Tablets</h2>
          <p className="category-text">24 models</p>
        </div>
        <div className="category-wrapper">
          <img src={accessories} alt="accessories" />
          <h2 className="category-title">Accessories</h2>
          <p className="category-text">100 models</p>
        </div>

      </div>
    </section>
  );
};
