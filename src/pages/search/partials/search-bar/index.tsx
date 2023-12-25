import { ChangeEvent, FormEvent, useState } from 'react';

import SearchIcon from '@/assets/icons/search.svg?react';
import SearchClearButton from '@/pages/search/partials/search-bar/SearchClearButton';

import Button from '@/components/button';

interface SearchBarProps {
  query: string | null;
  setSearchQuery: (value: string) => void;
  onClearSearch: () => void;
}

const Index = (props: SearchBarProps) => {
  /*
   * PROPS AND STATES
   * */
  const { query: existingQuery, setSearchQuery, onClearSearch } = props;
  const [query, setQuery] = useState<string>(existingQuery || '');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setQuery('');
    onClearSearch();
  };

  const desktopSearchIcon = () => {
    return (
      <div className="absolute left-0 top-0 bottom-0 w-10 hidden sm:flex items-center ps-3 pointer-events-none">
        <SearchIcon className="mt-1 opacity-80 w-8 h-8" />
      </div>
    );
  };

  const mobileSearchButton = () => {
    return (
      <Button className="flex sm:hidden !rounded-md !py-0 !px-2">
        <SearchIcon className="w-8 h-8 translate-y-0.5" />
      </Button>
    );
  };

  return (
    <form onSubmit={handleSearch} className="flex-1 flex  gap-3">
      <div className="flex-1 relative bg-gray-100 rounded-md sm:rounded-xl overflow-hidden">
        {desktopSearchIcon()}
        <input
          type="search"
          className="block w-full px-4 sm:px-11 py-3 sm:py-5 text-sm text-gray-900 bg-transparent"
          placeholder="Search by repository name"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          value={query}
        />
        <SearchClearButton onClick={clearSearch} query={query} />
      </div>
      {mobileSearchButton()}
    </form>
  );
};

export default Index;
