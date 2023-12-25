import ReactPaginate from 'react-paginate';
import { RepositoryType } from '@/@types/repository';

import RepositoryItem from '@/pages/search/partials/repository/RepositoryItem';

const RepositoryList = (props: {
  repositories: RepositoryType[];
  page: number;
  pageCount: number;
  handlePageClick: (value: number) => void;
}) => {
  /*
   * PROPS AND STATE
   * */
  const { repositories, page, pageCount, handlePageClick } = props;

  const isMobile = window.innerWidth <= 768;
  const pageRangeDisplayed = isMobile ? 1 : 8;

  return (
    <ul className="grid gap-6">
      {repositories?.map((repository: RepositoryType) => (
        <RepositoryItem key={repository?.id} repository={repository} />
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        previousLabel="Prev"
        onPageChange={(value) => handlePageClick(Number(value?.selected) + 1)}
        forcePage={page - 1}
        pageCount={Math.ceil(pageCount)}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={1}
        className="pagination flex flex-wrap"
      />
    </ul>
  );
};

export default RepositoryList;
