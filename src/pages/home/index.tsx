import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useDispatch } from "react-redux";
import RepositoryService from "@/services/repository.service";
import { addCommasToNumber } from "@/utils/helpers/date.utils";

import { setRepositoryList } from "@/store/slices/repository.slice";

import SearchFilter from "@/pages/home/partials/filter/SearchFilter";

import SearchBar from "@/pages/home/partials/search/SearchBar";
import RepositoryList from "@/pages/home/partials/repository/RepositoryList";
import RepositorySkeleton from "@/components/skeletons/RepositorySkeleton";
import SearchIllustration from "@/components/illustration/SearchIllustration";
import IllustrationWrapper from "@/components/illustration/IllustrationWrapper";
import ServerErrorIllustration from "@/components/illustration/ServerErrorIllustration";

function Error() {
  return (
    <IllustrationWrapper message="Something went wrong while fetching the data. Please try again !">
      <ServerErrorIllustration />
    </IllustrationWrapper>
  );
}

function TrySearch() {
  return (
    <IllustrationWrapper message="Try searching the repository by adding keyword on searchbar.">
      <SearchIllustration />
    </IllustrationWrapper>
  );
}

function Home() {
  /*
   * STATE
   * */
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [perPage, setPerPage] = useState("25");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  /*
   * REACT QUERY
   * */
  const {
    data: repositories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["repositories", searchQuery, perPage, order, page],
    queryFn: () =>
      RepositoryService.fetchRepositories({
        q: searchQuery,
        per_page: perPage,
        order,
        page,
      }),
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

  const handleSortChange = (type: string, value: string) => {
    type === "ordering" ? setOrder(value) : setPerPage(value);
    setPage(1);
  };

  const foundItems = () => (
    <div className="flex items-center justify-end">
      {repositories?.data?.total_count !== undefined && (
        <p className="text-xs">
          <b className="pr-1">{addCommasToNumber(totalCount)}</b>
          repositories found.
        </p>
      )}
    </div>
  );

  const content = () => {
    const searchQueryResponse = () =>
      isLoading ? (
        <RepositorySkeleton limit={Number(perPage)} />
      ) : (
        <RepositoryList
          repositories={repositories?.data?.items || []}
          page={page}
          handlePageClick={handlePageClick}
          pageCount={Math.ceil(totalCount / Number(perPage))}
        />
      );

    return searchQuery ? searchQueryResponse() : <TrySearch />;
  };

  return (
    <section className="min-h-screen ">
      <div className="container">
        <div className="grid gap-10 py-9 lg:w-4/5 mx-auto">
          <div className="grid gap-6">
            <div className="flex items-center gap-3">
              <SearchBar setSearchQuery={setSearchQuery} />
              <SearchFilter
                handleSortChange={handleSortChange}
                selectedOrdering={order}
                selectedPerPage={perPage}
              />
            </div>
            <div className="flex justify-between">
              {!error && searchQuery && (
                <p className="text-xs">
                  Showing results for
                  <b className="pl-1">{searchQuery}</b>
                </p>
              )}
              {foundItems()}
            </div>
          </div>
          {error?.message ? <Error /> : content()}
        </div>
      </div>
    </section>
  );
}

export default Home;
