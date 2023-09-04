import clsx from 'clsx';

/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import { FC, Fragment, ReactNode } from 'react';
import '../styles/Breadcrumbs.scss';

interface IBreadcrumb {
  href?: string;
  title?: string | ReactNode;
}
interface IBreadcrumbs {
  breadcrumbs: IBreadcrumb[];
  delimiter?: string | ReactNode;
  classActive?: string;
  breadcrumbsClass?: string;
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({
  breadcrumbs,
  classActive = '',
  delimiter,
  breadcrumbsClass,
}) => {
  return (
    <div>
      <nav className={clsx('breadcrumbs', breadcrumbsClass)}>
        {breadcrumbs.map(({ title, href }, index) => (
          <Fragment key={href}>
            {href ? (<a className={clsx('breadcrumbs-text', { [classActive]: (index === breadcrumbs.length - 1) })} href={href}>{title}</a>) : <p>{title}</p>}
            {index !== breadcrumbs.length - 1 && delimiter}
          </Fragment>
        ))}

        {/* <Link to="/" className={pathname === '/' ? 'breadcrumb-active' : 'breadcrumb-not-active'}>
        <SvgHome className="breadcrumbs-home" />
      </Link>
      <span><SvgArrowRight className="breadcrumbs-arrow__right" /></span>
      <Link to="/phones" className={pathname.startsWith('/phones') ? 'breadcrumb-active' : 'breadcrumb-not-active'}>
        Phones
      </Link>
      <span><SvgArrowRight className="breadcrumbs-arrow__right" /></span>
      <Link to="/phonesId">
        {}
      </Link> */}
      </nav>
    </div>
  );
};
