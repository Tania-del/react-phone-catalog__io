import { Breadcrumbs } from '../components/Breadcrumbs';
import { Favourites } from '../components/Favourites';
import { Footer } from '../components/Footer';
import SvgArrowRight from '../icons/ArrowRight';
import SvgHome from '../icons/Home';

export const FavouritesPage = () => {
  return (
    <>
      <div className="main-container">
        <Breadcrumbs
          delimiter={<SvgArrowRight className="breadcrumbs-svg" />}
          classActive="breadcrumbs-active"
          breadcrumbs={[
            {
              title: <SvgHome className="breadcrumbs-home" />,
              href: '#/',
            },
            {
              title: 'Favourites',
              href: '#/favourites',
            },
          ]}
        />
        <Favourites />
      </div>
      <Footer />
    </>
  );
};
