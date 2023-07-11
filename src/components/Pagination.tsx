import { useEffect, useMemo } from 'react';
import { usePagination } from '../hooks/usePagination';

export const Pagination = ({
  list,
  pageSize = 5,
  handleClick,
}: {
  list: any[];
  pageSize: number;
  handleClick: (page: number) => void;
}) => {
  const { currentPage, handleNext, handlePage, handlePrevious, pages } = usePagination({
    totalRecords: list,
    pageSize,
  });

  useEffect(() => {
    handleClick(currentPage);
  }, [currentPage, handleClick]);

  /**
   * render page counts
   */
  const renderPaging = useMemo(() => {
    return Array.from({ length: pages }).map((_, idx) => (
      <li key={idx}>
        <a
          className={`pagination-link ${idx + 1 === currentPage ? 'is-current' : ''}`}
          aria-label={`Page ${idx}`}
          aria-current="page"
          onClick={() => handlePage(idx + 1)}
        >
          {idx + 1}
        </a>
      </li>
    ));
  }, [pages, currentPage, handlePage]);

  return (
    <div className="pagination" role="navigation" aria-label="pagination">
      <a
        className={`pagination-previous ${currentPage === 1 && 'is-disabled'}`}
        onClick={handlePrevious}
        title="Click to previous page"
      >
        Previous
      </a>

      <ul className="pagination-list">{renderPaging}</ul>
      <a
        className={`pagination-next ${currentPage === pages && 'is-disabled'}`}
        onClick={handleNext}
        title="Click to Next Page"
      >
        Next page
      </a>
    </div>
  );
};
