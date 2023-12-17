import ReactPaginate from 'react-paginate';
import { RepositoryType } from '@/@types/repository';

import RepositoryItem from '@/pages/home/partials/repository/RepositoryItem';
import IllustrationWrapper from '@/components/illustration/IllustrationWrapper';
import NoDataFound from '@/components/illustration/NoDataFound';

const NoData = () => (
  <IllustrationWrapper
    message="Sorry, no data found ! Please, try again."
  >
    <NoDataFound />
  </IllustrationWrapper>
);

const RepositoryList = (props: {
  repositories: RepositoryType[],
  page: number,
  pageCount: number,
  handlePageClick: (value: { selected: number }) => void
}) => {
  /*
      * PROPS AND STATE
      * */
  const {
    repositories, page, pageCount, handlePageClick,
  } = props;

  const isMobile = window.innerWidth <= 768;
  const pageRangeDisplayed = isMobile ? 1 : 8;

  return (
    <ul className="grid gap-6">
      {repositories?.map((repository: RepositoryType) => (
        <RepositoryItem
          key={repository?.id}
          repository={repository}
        />
      ))}
      {repositories?.length
        ? (
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            previousLabel="Prev"
            onPageChange={handlePageClick}
            forcePage={page}
            pageCount={Math.ceil(pageCount)}
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={1}
            className="pagination flex"
          />
        ) : <NoData />}
    </ul>
  );
};

export default RepositoryList;
