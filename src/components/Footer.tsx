import { scrollToTop } from '../helpers/scrollToTop';
import SvgArrowUp from '../icons/ArrowUp';
import SvgLogo from '../icons/Logo';
import '../styles/Footer.scss';
// import { scrollToTop } from '../helpers/scrollToTop';

export const Footer = () => {
  // scrollToTop();

  return (
    <footer className="footer">
      <SvgLogo />
      {/* <div className="footer-nav">
        <NavLink className="nav-item" to="https://github.com/Tania-del">GitHub</NavLink>
        <NavLink className="nav-item" to="/gitHub">Contacts</NavLink>
        <NavLink className="nav-item" to="/gitHub">Rights</NavLink>
      </div> */}
      <div className="footer-btn__wrapper">
        <p className="footer-description">Back to top</p>
        <button
          type="button"
          data-cy="backButton"
          className="arrow-btn"
          onClick={() => scrollToTop()}
        >
          <SvgArrowUp />
        </button>
      </div>
    </footer>
  );
};
