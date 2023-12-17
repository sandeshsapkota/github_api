import { pagesOptions, orderingOptions } from '@/utils/constants/common';

import FilterIcon from '@/assets/icons/filter.svg?react';
import Dropdown from '@/components/dropdown';
import SortSection from '@/pages/home/partials/filter/SortSections';

interface SearchFilterTypes {
  handleSortChange: (type: string, value: string) => void
  selectedOrdering: string
  selectedPerPage: string
}

function SearchFilter({ handleSortChange, selectedOrdering, selectedPerPage }: SearchFilterTypes) {
  function trigger() {
    return (
      <div className="flex gap-2.5 items-center rounded-xl hover:bg-gray-100 px-4 py-[18px]">
        <FilterIcon />
        Filter
      </div>
    );
  }

  function content() {
    return (
      <div
        className="absolute right-0 z-[99] bg-white shadow-2xl p-5 sm:p-8 rounded-2xl padding-deducted-vw-width sm:w-[458px] grid gap-6"
      >
        <SortSection
          title="Items per page"
          options={pagesOptions}
          selectedValue={selectedPerPage}
          type="perPage"
          handleSortChange={handleSortChange}
        />
        <SortSection
          title="Order by"
          options={orderingOptions}
          selectedValue={selectedOrdering}
          type="ordering"
          handleSortChange={handleSortChange}
        />
      </div>
    );
  }

  return <Dropdown trigger={trigger()} content={content()} />;
}

export default SearchFilter;
