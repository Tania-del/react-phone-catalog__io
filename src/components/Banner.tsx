/* eslint-disable react/button-has-type */
import SvgArrowLeft from '../icons/ArrowLeft';
import SvgArrowRight from '../icons/ArrowRight';
import SvgDots from '../icons/Dots';
import banner from '../images/banner-phones.png';
import '../styles/Banner.scss';

export default function Banner() {
  return (
    <section>
      <div className="banner">
        <button className="banner-arrow">
          <SvgArrowLeft />
        </button>
        <img src={banner} alt="Banner" />
        <button className="banner-arrow">
          <SvgArrowRight />
        </button>
      </div>
      <div className="banner-dots">
        <SvgDots />
      </div>
    </section>
  );
}
