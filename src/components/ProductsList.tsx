import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
import { Product } from '../type/Product';
import '../styles/ProductsList.scss';
import { CustomSelect } from './CustomSelect';
import { Option } from '../type/Option';
import { MobileCard } from './MobileCard';
import { useFilter } from '../hooks/useFilter';

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
  const { getSort, getLimit, getQuery } = useFilter();

  getSort();
  getLimit();
  getQuery();

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

  const handleFilterOption = (type: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('sort', type);
    setSearchParams(params);

    const actions: Record<string, () => Product[]> = {
      Newest: () => [...products].sort((a, b) => b.year - a.year),
      Alphabetically: () => [...products].sort((a, b) => a.year - b.year),
      Cheapest: () => [...products].sort((a, b) => a.price - b.price),
    };

    setProductsToRender(actions[type]());
  };

  const sliceProducts = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('limit', value);
    setSearchParams(params);

    if (value === 'All') {
      return setProductsToRender(allwaysFullProducts);
    }
    // console.log(allwaysFullProducts);

    const optionToSlice = Number(value);

    return setProductsToRender(productsToRender.slice(0, optionToSlice));
  };

  return (
    <>
      <h1 className="products-title">{title}</h1>
      <p className="category-text">95 models</p>

      <div className="products-wrapper">
        <div>
          <p className="filter-text">Sort by</p>
          <div className="custom-selected">
            <CustomSelect
              options={options1}
              defaultOption={searchParams.get('sort') || 'Newest'}
              onReturnType={handleFilterOption}
            />
          </div>
        </div>

        <div>
          <p className="filter-text">Items on page</p>
          <div className="custom-selected">
            <CustomSelect
              onReturnType={sliceProducts}
              options={options2}
              defaultOption={searchParams.get('limit') || 16}
            />
          </div>
        </div>
      </div>

      <section className="products">
        <ul className="phones-list products-list">
          {productsToRender.map((product) => (
            <MobileCard
              item={product}
              key={product.id}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
