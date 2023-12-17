import SearchClear from '@/assets/icons/search-clear.svg?react';

const ClearButton = ({ setQuery, setSearchQuery }: {
  setSearchQuery: (query: string) => void,
  setQuery: (query: string) => void
}) => (
  <button
    type="button"
    onClick={() => {
      setSearchQuery('');
      setQuery('');
    }}
    aria-label="search button"
    className="absolute top-[50%] right-3 -translate-y-[50%] text-sm text-black hover:text-black/70 transition duration-200"
  >
    <SearchClear />
  </button>
);

export default ClearButton;
