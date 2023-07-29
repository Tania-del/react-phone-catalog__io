import { useState } from 'react';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search in phohes..."
        value={searchQuery}
        onChange={handleSearch}
      />

    </div>
  // <SvgSearch />
  );
};
