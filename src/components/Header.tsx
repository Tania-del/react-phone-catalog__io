import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { FavouriteContext } from '../context/FavouriteContext';
import SvgHeart from '../icons/Heart';
import SvgLogo from '../icons/Logo';
import SvgShoppingBag from '../icons/ShoppingBag';
import '../styles/Header.scss';
import { SearchBar } from './SearchBar';

export default function Header() {
  const location = useLocation();

  const searchShowBar = location.pathname === '/phones'
    || location.pathname === '/favourites';
  const { favourites } = useContext(FavouriteContext);

  return (
    <header className="header">
      <div className="navigation">
        <SvgLogo />
        <nav className="nav">
          <NavLink className="nav-item" to="/">Home</NavLink>
          <NavLink className="nav-item" to="/phones">Phones</NavLink>
        </nav>
      </div>

      <div className="nav-wrapper">
        {searchShowBar && <SearchBar />}
        <div>
          <NavLink
            type="button"
            className="navigation-btn navigation-link"
            to="/favourites"
          >
            <SvgHeart />
            {favourites.length > 0
              && <span className="count">{favourites.length}</span>}
          </NavLink>
          <NavLink
            type="button"
            className="navigation-btn navigation-link"
            to="#"
          >
            <SvgShoppingBag />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
