import { useState } from 'react';
import SvgSearch from '../icons/Search';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(target.value);
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Search in phohes..."
        value={searchQuery}
        onChange={handleSearch}
        required
        className="input"
      />
      <button type="button" className="input-search__btn">
        <SvgSearch />
      </button>
    </div>
  );
};
