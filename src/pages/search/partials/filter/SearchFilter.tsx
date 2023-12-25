import { pagesOptions, orderingOptions } from '@/utils/constants/common';

import Dropdown from '@/components/dropdown';
import SortSection from '@/pages/search/partials/filter/SortSections';
import FilterIcon from '@/assets/icons/filter.svg?react';

interface SearchFilterTypes {
  handleSortChange: (
    type: 'per_page' | 'order',
    value: string | number,
  ) => void;
  selectedOrdering: string | null;
  selectedPerPage: number;
}

function SearchFilter({
  handleSortChange,
  selectedOrdering,
  selectedPerPage,
}: SearchFilterTypes) {
  function trigger() {
    return (
      <div className="flex gap-2.5 items-center rounded-xl sm:hover:bg-gray-100 px-4 py-[18px] -mr-4 sm:mr-0">
        <FilterIcon />
        <span className="hidden sm:block">Filter</span>
      </div>
    );
  }

  function content() {
    return (
      <div className="grid gap-8">
        <SortSection
          title="Items per page"
          options={pagesOptions}
          selectedValue={selectedPerPage}
          type="per_page"
          handleSortChange={handleSortChange}
        />
        <SortSection
          title="Order by"
          options={orderingOptions}
          selectedValue={selectedOrdering}
          type="order"
          handleSortChange={handleSortChange}
        />
      </div>
    );
  }

  return <Dropdown trigger={trigger()} content={content()} />;
}

export default SearchFilter;
