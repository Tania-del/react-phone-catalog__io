import { FC, useState } from 'react';
import { Product } from '../type/Product';
import '../styles/ProductsList.scss';
import { CustomSelect } from './CustomSelect';
import { Option } from '../type/Option';

interface IProductsList {
  products: Product[];
  title: string;
}

// type FilterType = 'Newest' | 'Alphabetically' | 'Cheapest';
// eslint-disable-next-line max-len
export const ProductsList: FC<IProductsList> = ({
  products,
  title = 'title',
}) => {
  const [fullProducts, setFullProducts] = useState<Product[]>(products);
  // const [filter, setFilter] = useState('Newest');

  // eslint-disable-next-line no-console
  console.log(fullProducts);

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

  const handleFilter = (type: string) => {
    const productInfo = products.map(({ year, name, price }) => ({
      year,
      name,
      price,
    }));

    const actions: Record<string, Product[]> = {
      Newest: productInfo.sort((a, b) => a.year - b.year),
    };

    setFullProducts(actions[type]);
  };

  return (
    <>
      {/* <section className="products"> */}
      <h1 className="products-title">{title}</h1>
      <p className="category-text">95 models</p>

      <div className="products-wrapper">
        <div>
          <p className="filter-text">Sort by</p>
          <div className="custom-selected">
            <CustomSelect
              options={options1}
              defaultOption="Newest"
              handleFilter={handleFilter}
            />
          </div>
        </div>

        <div>
          <p className="filter-text">Items on page</p>
          <div className="custom-selected">
            <CustomSelect options={options2} defaultOption={16} />
          </div>
        </div>
      </div>

      {/* </section> */}
      <section className="products">
        <ul className="products-list">
          <li />
        </ul>
      </section>
    </>
  );
};
