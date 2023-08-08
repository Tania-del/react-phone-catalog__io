/* eslint-disable @typescript-eslint/no-shadow */
import { ChangeEvent, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import SvgSearch from '../icons/Search';
// import products from '../products.json';

export const SearchBar = () => {
  const { inputValue, setInputValue } = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();

  // eslint-disable-next-line max-len
  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }

    setSearchParams(params);
    setInputValue(value);
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Search in phohes..."
        value={inputValue}
        onChange={handleInputChange}
        required
        className="input"
      />
      <button type="button" className="input-search__btn">
        <SvgSearch />
      </button>
    </div>
  );
};
