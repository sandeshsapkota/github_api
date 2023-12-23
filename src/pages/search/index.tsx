import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { setRepositoryList } from '@/store/slices/repository.slice';

import RepositoryService from '@/services/repository.service';

import { addCommasToNumber } from '@/utils/helpers/date.utils';

import SearchBar from '@/pages/search/partials/search-bar';
import SearchFilter from '@/pages/search/partials/filter/SearchFilter';
import RepositoryList from '@/pages/search/partials/repository/RepositoryList';
import RepositorySkeleton from '@/components/skeletons/RepositorySkeleton';
import TrySearch from '@/components/common/TrySearch';
import Error from '@/components/common/Error';

function Home() {
  /*
   * STATE
   * */
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [order, setOrder] = useState('asc');

  const dispatch = useDispatch();

  /*
   * REACT QUERY
   * */
  const {
    data: repositories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['repositories', searchQuery, perPage, order, page],
    queryFn: () => {
      return RepositoryService.fetchRepositories({
        q: searchQuery,
        per_page: String(perPage),
        order,
        page: String(page),
      });
    },
    enabled: Boolean(searchQuery),
    retry: 0,
  });

  useEffect(() => {
    dispatch(setRepositoryList(repositories?.data?.items));
  }, [repositories, dispatch]);

  const totalCount = repositories?.data?.total_count;

  /*
   * HANDLERS
   * */
  const handlePageClick = (value: { selected: number }) =>
    setPage(value?.selected);

  const handleSearch = (query: string) => {
    setPage(0);
    setSearchQuery(query);
  };

  const handleSortChange = (type: string, value: string | number) => {
    type === 'ordering'
      ? setOrder(value as string)
      : setPerPage(value as number);
    setPage(1);
  };

  const foundItemsCount = () => (
    <div className="flex items-center justify-end">
      {repositories?.data?.total_count !== undefined && (
        <p className="text-xs">
          <b className="pr-1">{addCommasToNumber(totalCount)}</b>
          repositories found.
        </p>
      )}
    </div>
  );

  const searchResult = () => {
    const searchQueryResponse = () =>
      isLoading ? (
        <RepositorySkeleton limit={perPage} />
      ) : (
        <RepositoryList
          repositories={repositories?.data?.items || []}
          page={page}
          handlePageClick={handlePageClick}
          pageCount={Math.ceil(totalCount / perPage)}
        />
      );

    return searchQuery ? searchQueryResponse() : <TrySearch />;
  };

  return (
    <section className="min-h-screen ">
      <div className="container">
        <div className="grid gap-10 py-9 lg:w-4/5 mx-auto">
          <div className="grid gap-6">
            <div className="flex sm:gap-4 items-center ">
              <SearchBar setSearchQuery={handleSearch} />
              <SearchFilter
                selectedOrdering={order}
                selectedPerPage={perPage}
                handleSortChange={handleSortChange}
              />
            </div>
            <div className="flex justify-between">
              {!error && searchQuery && (
                <p className="text-xs">
                  Showing results for
                  <b className="pl-1">{searchQuery}</b>
                </p>
              )}
              {foundItemsCount()}
            </div>
          </div>
          {error?.message ? <Error /> : searchResult()}
        </div>
      </div>
    </section>
  );
}

export default Home;
