import SearchClear from '@/assets/icons/search-clear.svg?react';
import OpacityFader from '@/components/motion/OpacityFader';

const ClearButton = ({
  setQuery,
  setSearchQuery,
  query,
}: {
  setSearchQuery: (query: string) => void;
  setQuery: (query: string) => void;
  query: string;
}) => (
  <OpacityFader
    animate={Boolean(query)}
    classes="absolute top-0 bottom-0 right-3 flex items-center"
  >
    <button
      type="button"
      onClick={() => {
        setSearchQuery('');
        setQuery('');
      }}
      aria-label="search button"
      className="text-sm text-black hover:text-black/70 transition duration-200"
    >
      <SearchClear className="h-6 w-6" />
    </button>
  </OpacityFader>
);

export default ClearButton;
