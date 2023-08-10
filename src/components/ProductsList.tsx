import {
  FC, useEffect, useState, useContext,
} from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
import { Product } from '../type/Product';
import '../styles/ProductsList.scss';
import { CustomSelect } from './CustomSelect';
import { Option } from '../type/Option';
import { MobileCard } from './MobileCard';
import { SearchContext } from '../context/SearchContext';
import { Breadcrumbs } from './Breadcrumbs';

interface IProductsList {
  products: Product[];
  title: string;
}

// eslint-disable-next-line max-len
export const ProductsList: FC<IProductsList> = ({
  products,
  title = 'title',
}) => {
  const [productsToRender, setProductsToRender] = useState<Product[]>(products);
  const [allwaysFullProducts] = useState<Product[]>(products);

  const [searchParams, setSearchParams] = useSearchParams();
  const { inputValue } = useContext(SearchContext);

  const options1: Option[] = [
    { value: 'Newest', label: 'Newest' },
    { value: 'Alphabetically', label: 'Alphabetically' },
    { value: 'Cheapest', label: 'Cheapest' },
  ];

  const options2: Option[] = [
    { value: '4', label: '4' },
    { value: '8', label: '8' },
    { value: '16', label: '16' },
    { value: 'All', label: 'All' },
  ];

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const sort = (key: string, products: Product[]) => {
    const actions: Record<string, () => Product[]> = {
      Newest: () => [...products].sort((a, b) => b.year - a.year),
      Alphabetically: () => [...products].sort((a, b) => a.year - b.year),
      Cheapest: () => [...products].sort((a, b) => a.price - b.price),
    };

    return actions[key]();
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const slice = (key: string, arr: Product[]) => {
    if (key === 'All') {
      return arr;
    }

    const optionToSlice = Number(key);

    const slicedProducts = arr.slice(0, optionToSlice);

    return slicedProducts;
  };

  const getSort = () => {
    const params = new URLSearchParams(document.location.search);

    return params.get('sort') ?? '';
  };

  const getLimit = () => {
    const params = new URLSearchParams(document.location.search);

    return params.get('limit') ?? '';
  };

  const getQuery = () => {
    const params = new URLSearchParams(document.location.search);

    return params.get('query' ?? '');
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const filterByQuery = (products: Product[], query?: string): Product[] => {
    const input = typeof query === 'string' ? query : getQuery() ?? '';

    const filteredProductsByQuery = products.filter(
      (product) => product.name.includes(input),
    );

    return filteredProductsByQuery;
  };

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const sortByQuery = (arr: Product[], key?: string) => {
    const validatedSort = key || getSort();

    if (!validatedSort) {
      return arr;
    }

    return sort(validatedSort, arr);
  };

  const limitByQuery = (arr: Product[], key?: string) => {
    const validatedLimit = key || getLimit();

    if (!validatedLimit) {
      return arr;
    }

    return slice(validatedLimit, arr);
  };

  // eslint-disable-next-line max-len
  const handleFilterByType = (key = 'All', type: 'sort' | 'limit'): void => {
    const params = new URLSearchParams(searchParams);

    if (type === 'sort') {
      params.set('sort', key);
      setSearchParams(params);

      const filteredByQuery = filterByQuery(allwaysFullProducts);
      const sortedByQuery = sortByQuery(filteredByQuery, key);
      const slicedByLimit = limitByQuery(sortedByQuery);

      setProductsToRender(slicedByLimit);
    }

    if (type === 'limit') {
      params.set('limit', key);
      setSearchParams(params);

      const filteredByQuery = filterByQuery(allwaysFullProducts);
      const sortedByQuery = sortByQuery(filteredByQuery);
      const slicedByLimit = limitByQuery(sortedByQuery, key);

      setProductsToRender(slicedByLimit);
    }
  };

  useEffect(() => {
    const filteredByQuery = filterByQuery(allwaysFullProducts, inputValue);
    const sortedByQuery = sortByQuery(filteredByQuery);
    const slicedByLimit = limitByQuery(sortedByQuery);

    setProductsToRender(slicedByLimit);
  }, [inputValue]);

  useEffect(() => {
    const sortedByQuery = sortByQuery(allwaysFullProducts);

    const filteredByQuery = filterByQuery(sortedByQuery);

    const slicedByLimit = limitByQuery(filteredByQuery);

    setProductsToRender(slicedByLimit);
  }, []);

  return (
    <>
      <Breadcrumbs />
      <h1 className="products-title">{title}</h1>
      <p className="category-text">95 models</p>

      <div className="products-wrapper">
        <div>
          <p className="filter-text">Sort by</p>
          <div className="custom-selected">
            <CustomSelect
              options={options1}
              defaultOption={searchParams.get('sort') || 'Newest'}
              // eslint-disable-next-line max-len
              onReturnType={(value) => handleFilterByType(value, 'sort')}
            />
          </div>
        </div>

        <div>
          <p className="filter-text">Items on page</p>
          <div className="custom-selected">
            <CustomSelect
              options={options2}
              defaultOption={searchParams.get('limit') || 16}
              onReturnType={(value) => handleFilterByType(value, 'limit')}
            />
          </div>
        </div>
      </div>

      <section className="products">
        <ul className="phones-list products-list">
          {productsToRender?.map((product) => (
            <MobileCard item={product} key={product.id} />
          ))}
        </ul>
      </section>
    </>
  );
};
