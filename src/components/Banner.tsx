/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */

import { useState } from 'react';
import SvgArrowLeft from '../icons/ArrowLeft';
import SvgArrowRight from '../icons/ArrowRight';
import '../styles/Banner.scss';
import phonesBanner from '../images/banner-phones.png';
import tabletsBanner from '../images/banner-tablets.png';
import accessoriesBanner from '../images/banner-accessories.png';
import SvgDot from '../icons/Dot';

const bannerImages = [
  phonesBanner,
  tabletsBanner,
  accessoriesBanner,
];

export const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextBanner = () => {
    setCurrentImageIndex((prevIndexImage) => (
      prevIndexImage < bannerImages.length - 1
        ? prevIndexImage + 1 : prevIndexImage));
  };

  const handlePrevBanner = () => {
    setCurrentImageIndex((prevIndexImage) => (prevIndexImage === 0
      ? prevIndexImage : prevIndexImage - 1));
  };

  return (
    <section className="banner-section">
      <div className="banner">
        <button className="banner-arrow">
          <SvgArrowLeft className="arrow-image" onClick={handlePrevBanner} />
        </button>
        <div className="banner-container">
          <img
            className="banner-image"
            src={bannerImages[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
          />
        </div>
        <button className="banner-arrow">
          <SvgArrowRight className="arrow-image" onClick={handleNextBanner} />
        </button>
      </div>
      <div className="banner-dots">
        {bannerImages?.map((_, index) => <SvgDot key={index} className={`banner-img ${index === currentImageIndex ? 'banner-img__current' : ''}`} />)}
      </div>
    </section>
  );
};

// style={{ fill: index === currentImageIndex ? 'red' : 'green'}}
