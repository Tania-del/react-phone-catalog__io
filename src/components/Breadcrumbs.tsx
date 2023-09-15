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
      </nav>
    </div>
  );
};
