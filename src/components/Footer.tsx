import { NavLink } from 'react-router-dom';
import SvgArrowUp from '../icons/ArrowUp';
import SvgLogo from '../icons/Logo';
import '../styles/Footer.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <SvgLogo />
      <div className="footer-nav">
        <NavLink className="nav-item" to="/gitHub">GitHub</NavLink>
        <NavLink className="nav-item" to="/gitHub">Contacts</NavLink>
        <NavLink className="nav-item" to="/gitHub">Rights</NavLink>
      </div>
      <div className="footer-btn__wrapper">
        <p className="footer-description">Back to top</p>
        <button type="button" className="arrow-btn" onClick={scrollToTop}>
          <SvgArrowUp />
        </button>
      </div>
    </footer>
  );
};
