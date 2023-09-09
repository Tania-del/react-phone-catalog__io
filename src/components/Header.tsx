import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { FavouriteContext } from '../context/FavouriteContext';
import SvgHeart from '../icons/Heart';
import SvgLogo from '../icons/Logo';
import SvgShoppingBag from '../icons/ShoppingBag';
import '../styles/Header.scss';
import { SearchBar } from './SearchBar';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const location = useLocation();
  const searchShowBar
    = location.pathname === '/phones' || location.pathname === '/favourites';
  const searchCart = location.pathname === '/cart';
  const { favourites } = useContext(FavouriteContext);
  const { cartItems } = useContext(CartContext);
  // console.log(location);

  // const isFavouriteVisible = location.pathname === '/favourite'

  return (
    <header className="header">
      <div className="navigation">
        <SvgLogo />
        <nav className="nav">
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/phones">
            Phones
          </NavLink>
        </nav>
      </div>

      <div className="nav-wrapper">
        {searchShowBar && <SearchBar />}
        <div>
          {searchCart || (
            <NavLink
              type="button"
              className="navigation-btn navigation-link"
              to="/favourites"
            >
              <SvgHeart />
              {favourites.length > 0 && (
                <span className="count">{favourites.length}</span>
              )}
            </NavLink>
          )}

          <NavLink
            type="button"
            className="navigation-btn navigation-link"
            to="/cart"
          >
            <SvgShoppingBag />
            {cartItems.length > 0 && (
              <span className="count">{cartItems.length}</span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
