import SvgHeart from '../icons/Heart';
import SvgLogo from '../icons/Logo';
import SvgShoppingBag from '../icons/ShoppingBag';
import '../styles/Header.scss';

export default function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <SvgLogo />
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">Phones</li>
          <li className="list-item">Tablets</li>
          <li className="list-item">Accessories</li>
        </ul>
      </nav>
      <div className="navigation-img__wrapper">
        <SvgHeart className="navigation-img" />
        <SvgShoppingBag className="navigation-img" />
      </div>
    </header>
  );
}
