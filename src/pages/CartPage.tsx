import { Breadcrumbs } from '../components/Breadcrumbs';
import { CartItems } from '../components/CartItems';
import { Footer } from '../components/Footer';
import SvgArrowLeft from '../icons/ArrowLeft';

export const CartPage = () => {
  return (
    <>
      <div className="main-container">
        <Breadcrumbs
          classActive="breadcrumbs-active"
          breadcrumbs={[
            {
              title: (
                <div
                  className="breadcrumbs-back"
                >
                  <SvgArrowLeft />
                  <p>Back</p>
                </div>
              ),
              href: '#/phones',
            },
          ]}
        />
        <CartItems />
      </div>
      <Footer />
    </>
  );
};
