import { useFavouriteClick } from '../helpers/useFavouriteClick';
import products from '../products.json';
import { ProductsList } from './ProductsList';

export const Favourites = () => {
  const { getFavourites } = useFavouriteClick();
  const favourites = getFavourites();

  const filteredProducts = products.filter(
    (product) => favourites.includes(product.phoneId),
  );

  return (
    <>
      <h1 className="phones-text">Cart</h1>
      <p className="about-text" style={{ marginTop: '8px' }}>{`${favourites.length} items`}</p>

      <ProductsList products={filteredProducts} title="Cart" />
    </>
  );
};
