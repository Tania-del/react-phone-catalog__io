import { Breadcrumbs } from '../components/Breadcrumbs';
import { Footer } from '../components/Footer';
import { ProductsList } from '../components/ProductsList';
import SvgArrowRight from '../icons/ArrowRight';
import SvgHome from '../icons/Home';
import products from '../products.json';

export const PhonesPage = () => {
  return (
    <>
      <div className="main-container">
        <Breadcrumbs
          delimiter={<SvgArrowRight className="breadcrumbs-svg" />}
          classActive="breadcrumbs-active"
          breadcrumbs={
            [
              {
                title: <SvgHome className="breadcrumbs-home" />,
                href: '/',
              },
              {
                title: 'Phones',
                href: '/phones',
              },
            ]
          }
        />
        <ProductsList products={products} title="Mobile phones" />
      </div>
      <Footer />
    </>
  );
};
