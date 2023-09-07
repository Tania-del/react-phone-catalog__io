import { Product } from '../type/Product';

export const getQuery = () => {
  const params = new URLSearchParams(document.location.search);

  return params.get('query' ?? '');
};

export const filterByQuery = (
  products: Product[],
  query?: string,
  setInputErrorMessage?: (message: string) => void,
): Product[] => {
  const input = typeof query === 'string' ? query : getQuery() ?? '';

  const filteredProductsByQuery = products.filter(
    (product) => product.name.toLowerCase().includes(input),
  );

  if (!filteredProductsByQuery.length) {
    setInputErrorMessage?.('No model was found for the specified parameters');
  } else {
    setInputErrorMessage?.('');
  }

  return filteredProductsByQuery;
};
