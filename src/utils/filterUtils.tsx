import { Product } from '../type/Product';

export const getQuery = () => {
  const params = new URLSearchParams(document.location.search);

  return params.get('query' ?? '');
};

export const filterByQuery = (
  products: Product[],
  query?: string,
  setErrorMessage?: (message: string) => void,
): Product[] => {
  const input = typeof query === 'string' ? query : getQuery() ?? '';

  const filteredProductsByQuery = products.filter(
    (product) => product.name.toLowerCase().includes(input),
  );

  if (!filteredProductsByQuery.length) {
    setErrorMessage?.('No model was found for the specified parameters');
  } else {
    setErrorMessage?.('');
  }

  return filteredProductsByQuery;
};
