/* eslint-disable max-len */
import { Link, useLocation } from 'react-router-dom';
import SvgArrowRight from '../icons/ArrowRight';
import SvgHome from '../icons/Home';
import '../styles/Breadcrumbs.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="breadcrumbs">
      <Link to="/" className={pathname === '/' ? 'breadcrumb-active' : 'breadcrumb-not-active'}>
        <SvgHome className="breadcrumbs-home" />
      </Link>
      <span><SvgArrowRight className="breadcrumbs-arrow__right" /></span>
      <Link to="/phones" className={pathname.startsWith('/phones') ? 'breadcrumb-active' : 'breadcrumb-not-active'}>
        Phones
      </Link>
      <span><SvgArrowRight className="breadcrumbs-arrow__right" /></span>
      {/* <Link to="/phones/name">

      </Link> */}
    </nav>
  );
};
