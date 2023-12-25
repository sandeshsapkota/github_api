import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import RepositoryService from '@/services/repository.service';

import { addCommasToNumber } from '@/utils/helpers/date.utils';

import SearchBar from '@/pages/search/partials/search-bar';
import SearchFilter from '@/pages/search/partials/filter/SearchFilter';
import RepositoryList from '@/pages/search/partials/repository/RepositoryList';
import RepositorySkeleton from '@/components/skeletons/RepositorySkeleton';
import TrySearch from '@/components/common/TrySearch';
import Error from '@/components/common/Error';
import NoData from '@/components/common/NoData';

type FilterTypes = {
  q: string | null;
  per_page: number;
  page: number;
  order: string;
};

function Home() {
  /*
   * STATE
   * */
  const [searchParam, setSearchParam] = useSearchParams();

  const [param, setParam] = useState<FilterTypes>({
    q: searchParam.get('q'),
    per_page: Number(searchParam.get('per_page')) || 10,
    page: Number(searchParam.get('page')) || 1,
    order: searchParam.get('order') || 'asc',
  });

  const { q: query, per_page, page, order } = param;

  /*
   * REACT QUERY
   * */
  const { data, isLoading, error } = useQuery<any>({
    queryKey: ['repositories', param],
    queryFn: () => {
      return RepositoryService.fetchRepositories(param);
    },
    enabled: Boolean(param.q),
    retry: 0,
  });

  const { items, total_count } = data?.data || {};

  /*
   * HANDLERS
   * */
  const updateFilter = (
    type: 'q' | 'page' | 'per_page' | 'order',
    value: string | number,
  ) => {
    // combine the existing search state with the new filter
    const updatedParams = { ...param, [type]: value };

    // reset page to 0 when user changes per_page, order, or query
    const resetPageTypes = ['q', 'per_page', 'order'];
    if (resetPageTypes.includes(type)) {
      updatedParams.page = 1;
    }
    setParam(updatedParams);
    // change URL only when there is a search query
    if (query || type === 'q') {
      setSearchParam(updatedParams as any);
    }
  };

  const clearSearch = () => {
    setSearchParam({});
    setParam({
      q: '',
      per_page: 10,
      page: 1,
      order: 'asc',
    });
  };

  const renderSearchInformation = () => (
    <div className="flex justify-between">
      {!error && param?.q && (
        <p className="text-xs">
          Showing results for <b className="pl-1">{query}</b>
        </p>
      )}
      <div className="flex items-center justify-end">
        {total_count !== undefined && (
          <p className="text-xs">
            <b className="pr-1">{addCommasToNumber(total_count)}</b>
            repositories found.
          </p>
        )}
      </div>
    </div>
  );

  const renderResultsContent = () => {
    if (isLoading) {
      return <RepositorySkeleton limit={per_page} />;
    }

    if (!param.q) {
      return <TrySearch />;
    }

    if (error?.message) {
      return <Error />;
    }

    if (!items.length) {
      return <NoData />;
    }

    return (
      <RepositoryList
        repositories={items || []}
        page={page}
        handlePageClick={(value) => {
          updateFilter('page', value);
        }}
        pageCount={Math.ceil(total_count / per_page)}
      />
    );
  };

  return (
    <section className="min-h-screen ">
      <div className="container">
        <div className="grid gap-10 py-9 lg:w-4/5 mx-auto">
          <div className="grid gap-6">
            <div className="flex sm:gap-4 items-center ">
              <SearchBar
                setSearchQuery={(value) => updateFilter('q', value)}
                onClearSearch={clearSearch}
                query={query}
              />
              <SearchFilter
                selectedOrdering={order}
                selectedPerPage={per_page}
                handleSortChange={updateFilter}
              />
            </div>
            {renderSearchInformation()}
          </div>
          {renderResultsContent()}
        </div>
      </div>
    </section>
  );
}

export default Home;
