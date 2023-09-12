/* eslint-disable max-len */
import {
  FC, useEffect, useState, useContext,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product } from '../type/Product';
import '../styles/ProductsList.scss';
import { CustomSelect } from './CustomSelect';
import { Option } from '../type/Option';
import { MobileCard } from './MobileCard';
import { SearchContext } from '../context/SearchContext';
import { Pagination } from './Pagination';
import { PhoneDetails } from './PhoneDetails';
import { useCardClick } from '../helpers/useCardClick';
import { filterByQuery } from '../utils/filterUtils';
import { ErrorMessageContext } from '../context/ErrorMessageContext';

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedPhone] = useState<Product | null>(null);
  const { handleCardClick } = useCardClick();
  const { errorMessage, setErrorMessage } = useContext(ErrorMessageContext);

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

    // console.log(params.get('limit') ?? '');

    return params.get('limit') ?? '';
  };

  const getPage = () => {
    const params = new URLSearchParams(document.location.search);

    return params.get('page') ?? 1;
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

  const perPage = Number(getLimit()) || 16;

  const calculatePages = (total: number, elPerPage: number) => Math.ceil(total / elPerPage);

  const pages = calculatePages(allwaysFullProducts.length, Number(perPage));
  // console.log('perPage',perPage);

  // eslint-disable-next-line max-len
  const handleFilterByType = (
    key: string | number = 'All',
    type: 'sort' | 'limit' | 'pagination',
  ): void => {
    const params = new URLSearchParams(searchParams);

    if (type === 'sort') {
      params.set('sort', String(key));
      params.delete('page');
      setSearchParams(params);

      const filteredByQuery = filterByQuery(allwaysFullProducts);
      const sortedByQuery = sortByQuery(filteredByQuery, String(key));
      const slicedByLimit = limitByQuery(sortedByQuery);

      setCurrentPage(1);
      setProductsToRender(slicedByLimit);
    }

    if (type === 'limit') {
      params.set('limit', String(key));
      params.delete('page');
      setSearchParams(params);

      const filteredByQuery = filterByQuery(allwaysFullProducts);
      const sortedByQuery = sortByQuery(filteredByQuery);
      const slicedByLimit = limitByQuery(sortedByQuery, String(key));

      setCurrentPage(1);
      setProductsToRender(slicedByLimit);
    }

    if (type === 'pagination' && typeof key === 'number') {
      const filteredByQuery = filterByQuery(allwaysFullProducts);
      const sortedByQuery = sortByQuery(filteredByQuery);

      const slicedByLimit = sortedByQuery.slice(
        perPage * key - perPage,
        perPage * key,
      );

      setProductsToRender(slicedByLimit);
    }
  };

  const onPageChange = (value: number) => {
    const params = new URLSearchParams(searchParams);

    if (value !== 1) {
      params.set('page', String(value));
    } else {
      params.delete('page');
    }

    setSearchParams(params);
    setCurrentPage(value);

    handleFilterByType(value, 'pagination');
  };

  useEffect(() => {
    const filteredByQuery = filterByQuery(allwaysFullProducts, inputValue, setErrorMessage);
    const sortedByQuery = sortByQuery(filteredByQuery);
    const slicedByLimit = limitByQuery(sortedByQuery);

    const page = getPage();

    setCurrentPage(Number(page) || 1);

    setProductsToRender(slicedByLimit);
  }, [inputValue]);

  useEffect(() => {
    const filteredByQuery = filterByQuery(allwaysFullProducts);

    const sortedByQuery = sortByQuery(filteredByQuery);

    const page = getPage();

    const slicedByLimit = sortedByQuery.slice(
      perPage * Number(page) - perPage,
      perPage * Number(page),
    );

    setProductsToRender(slicedByLimit);
  }, []);

  return (
    <>
      {selectedPhone ? <PhoneDetails /> : (
        <>
          <h1 className="products-title">{title}</h1>
          <p className="category-text">95 models</p>
          <div className="products-type__wrapper">
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

          <div className="products-wrapper">
            {errorMessage && <p>{errorMessage}</p>}
            <section className="products">
              <ul className="products-list">
                {productsToRender?.map((product) => (
                  <MobileCard
                    item={product}
                    key={product.id}
                    onClick={() => handleCardClick(product.phoneId)}
                  />
                ))}
              </ul>
            </section>
          </div>
          {!errorMessage && (
            <Pagination
              onPageChange={onPageChange}
              total={pages}
              currentPage={currentPage}
            />
          )}
        </>
      )}
    </>
  );
};
