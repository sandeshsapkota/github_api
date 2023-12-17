import { ChangeEvent, FormEvent, useState } from 'react';

import SearchIcon from '@/assets/icons/search.svg?react';
import SearchClearButton from '@/pages/home/partials/search/SearchClearButton';
import SearchQuickAccess from '@/pages/home/partials/search/SearchQuickAccess';

interface SearchBarProps {
  setSearchQuery: (value: string) => void
}

const SearchBar = (props: SearchBarProps) => {
  /*
  * PROPS AND STATES
  * */
  const { setSearchQuery } = props;
  const [query, setQuery] = useState<string>('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <div className="flex items-center gap-3 flex-1">
      <div className="grid gap-1 flex-1">
        <div className="flex flex-col gap-4 ">
          <form onSubmit={handleSearch} className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="relative">
              <div
                className="absolute inset-y-0 left-1 top-1 flex items-center ps-3 pointer-events-none"
              >
                <SearchIcon />
              </div>
              <input
                type="search"
                className="block w-full px-4 py-5 ps-12 text-sm text-gray-900 bg-transparent"
                placeholder="Search by repository name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                value={query}
              />
              {query ? <SearchClearButton setSearchQuery={setSearchQuery} setQuery={setQuery} />
                : <SearchQuickAccess />}
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default SearchBar;
