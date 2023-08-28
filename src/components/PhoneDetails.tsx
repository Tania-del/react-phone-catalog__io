import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard } from '../type/ProductCard';
import { Product } from '../type/Product';
import '../styles/PhoneDetails.scss';

interface IPhoneDetails {
  phone: Product;

}

export const PhoneDetails: FC<IPhoneDetails> = ({ phone }) => {
  const [productCard, setProductCard] = useState<ProductCard | null>(null);

  useEffect(() => {
    async function fetchPhoneData() {
      try {
        const response = await axios.get(`./products/${phone.phoneId}.json`);

        setProductCard(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching phone data:', error);
      }
    }

    fetchPhoneData();
  }, []);

  return (
    <>
      <h1 className="products-title">{phone.name}</h1>
      <div className="card-container">
        <div className="card-small__wrapper">
          {productCard?.images.map(
            (imageUrl: string, index: number) => (

              <img
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                src={imageUrl}
                alt={productCard?.name}
                className="card-small__img"
              />
            ),
          )}
        </div>
      </div>
    </>
  );
};
