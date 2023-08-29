import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard } from '../type/ProductCard';
import { Product } from '../type/Product';
import '../styles/PhoneDetails.scss';
import SvgHeart from '../icons/Heart';
import { MobileList } from './MobileList';
import products from '../products.json';

interface IPhoneDetails {
  phone: Product;
}

export const PhoneDetails: FC<IPhoneDetails> = ({ phone }) => {
  const [productCard, setProductCard] = useState<ProductCard | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const fetchPhoneData = async (url: string) => {
    try {
      const response = await axios.get(url);

      setProductCard(response.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching phone data:', error);
    }
  };

  useEffect(() => {
    fetchPhoneData(`./products/${phone.phoneId}.json`);
  }, []);

  const handleColors = async (color: string) => {
    const newUrlChunk = phone.phoneId?.replace(phone?.color ?? '', color);

    await fetchPhoneData(`./products/${newUrlChunk}.json`);
  };

  const handleCapacity = async (capacity: string) => {
    // eslint-disable-next-line radix
    const oldCapacity = phone.capacity?.toLowerCase();

    const newCapacity = capacity.toLowerCase();

    const newUrlChunk = phone.phoneId?.replace(
      oldCapacity ?? '', newCapacity,
    );

    fetchPhoneData(`./products/${newUrlChunk}.json`);
  };

  return (
    <>
      <h1 className="products-title">{productCard?.name}</h1>
      <div className="product-card__container">
        <div className="card-small__wrapper">
          {productCard?.images.map((imageUrl: string, index: number) => (
            <button
              type="button"
              className="card-img__btn"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={imageUrl}
                alt={productCard?.name}
                className="card-small__img"
              />
            </button>
          ))}
        </div>
        <div className="selected-img__wrapper">

          <div className="selected-img__container">
            {selectedImageIndex !== null && (
              <img
                src={productCard?.images?.[selectedImageIndex]}
                alt=""
                className="selected-image"
              />
            )}
          </div>

          <div>
            <p className="description-title">Avaliable colors</p>
            <div className="button-wrapper">
              {productCard?.colorsAvailable?.map((color) => (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  type="button"
                  key={color}
                  style={{ background: color }}
                  className="button-color"
                  onClick={() => handleColors(color)}
                />
              ))}
            </div>

            <div className="underline card-underline" />
            <p className="description-title">Select Capacity</p>
            <div className="button-wrapper">
              {productCard?.capacityAvailable?.map((capacity) => (
                <button
                  type="button"
                  className="capacity-button"
                  key={capacity}
                  onClick={() => handleCapacity(capacity)}
                >
                  {capacity}
                </button>
              ))}
            </div>
            <div className="underline card-underline" />
            <div className="card-price__wrapper">
              <p className="card-price">{`$${productCard?.priceDiscount}`}</p>
              <p className="card-full__price">{`$${productCard?.priceRegular}`}</p>
            </div>
            <div className="buttons-wrapper card-buttons__wrapper">
              <button type="button" className="button card-button">
                <h2 className="button-title">Add to card</h2>
              </button>
              <button type="button" className="button-favourites">
                <SvgHeart />
              </button>
            </div>

            <div className="card-description">
              <div>
                <p className="description-title">Screen</p>
                <p className="description-title">Resolution</p>
                <p className="description-title">Processor</p>
                <p className="description-title">RAM</p>
              </div>
              <div>
                <p className="description-text">{productCard?.screen}</p>
                <p className="description-text">{productCard?.resolution}</p>
                <p className="description-text">{productCard?.processor}</p>
                <p className="description-text">{productCard?.ram}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="details-wrapper">
        <div className="about">
          <h2 className="about-title">About</h2>
          <div className="underline about-underline" />
          {productCard?.description.map(({ title, text }, index) => (
            <>
              <h3
                key={title + String(index)}
                className="about-title__description"
              >
                {title}
              </h3>
              {text.map((textItem) => <p className="about-text">{textItem}</p>)}
            </>
          ))}
        </div>

        <div className="specs">
          <h2 className="about-title">Tech specs</h2>
          <div className="underline about-underline" />
          <div className="specs-wrapper">
            <div>
              <p className="about-text about-specs">Screen</p>
              <p className="about-text about-specs">Resolution</p>
              <p className="about-text about-specs">Processor</p>
              <p className="about-text about-specs">RAM</p>
              <p className="about-text about-specs">Capacity</p>
              <p className="about-text about-specs">Camera</p>
              <p className="about-text about-specs">Zoom</p>
              <p className="about-text about-specs">Cell</p>
            </div>
            <div>
              <p className="about-text specs-title">{productCard?.screen}</p>
              <p className="about-text specs-title">
                {productCard?.resolution}
              </p>
              <p className="about-text specs-title">{productCard?.processor}</p>
              <p className="about-text specs-title">{productCard?.ram}</p>
              <p className="about-text specs-title">{productCard?.capacity}</p>
              <p className="about-text specs-title">{productCard?.camera}</p>
              <p className="about-text specs-title">{productCard?.zoom}</p>
              <p className="about-text specs-title">{productCard?.cell}</p>
            </div>

          </div>
        </div>
      </div>
      <MobileList products={products} title="You may also like" />
    </>
  );
};
