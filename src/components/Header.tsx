import { NavLink, useLocation } from 'react-router-dom';
import SvgHeart from '../icons/Heart';
import SvgLogo from '../icons/Logo';
import SvgShoppingBag from '../icons/ShoppingBag';
import '../styles/Header.scss';
import { SearchBar } from './SearchBar';

export default function Header() {
  const location = useLocation();
  const searchShowBar = location.pathname !== '/';

  return (
    <header className="header">
      <div className="navigation">
        <SvgLogo />
        <nav className="nav">
          <NavLink className="nav-item" to="/">Home</NavLink>
          <NavLink className="nav-item" to="/phones">Phones</NavLink>
          <NavLink className="nav-item" to="/tablets">Tablets</NavLink>
          <NavLink className="nav-item" to="/accessories">Accessories</NavLink>
        </nav>
      </div>

      <div className="nav-wrapper">
        {searchShowBar && <SearchBar />}
        <div>
          <button type="button" className="navigation-btn">
            <SvgHeart />
          </button>
          <button type="button" className="navigation-btn">
            <SvgShoppingBag />
          </button>
        </div>
      </div>
    </header>
  );
}
