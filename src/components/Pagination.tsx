import { FC } from 'react';
import SvgArrowLeft from '../icons/ArrowLeft';
import SvgArrowRight from '../icons/ArrowRight';
import '../styles/Pagination.scss';
import { scrollToTop } from '../helpers/scrollToTop';

interface IPagination {
  total: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
export const Pagination: FC<IPagination> = ({
  total,
  currentPage,
  onPageChange,
}) => {
  const pagesToShow = 4;

  const generatePages = (number: number) => {
    const result = [];
    const start = currentPage - 2;

    for (let i = 1; i <= number; i += 1) {
      result.push(i);
    }

    if (currentPage === 1) {
      return result.slice(0, pagesToShow);
    }

    if (currentPage >= number - 2) {
      return result.slice(number - pagesToShow);
    }

    return result.slice(start, start + pagesToShow);
  };

  return (
    <>
      <div className="pagination">
        <button
          onClick={() => {
            onPageChange(Math.max(1, currentPage - 1));
            scrollToTop();
          }}
          type="button"
          className="arrow-btn pagination-btn"
        >
          <SvgArrowLeft className="arrow-image pagination-img" />
        </button>
        <ul className="pagination-list">
          {generatePages(total).map((page) => (
            <li key={page} className="page">
              <button
                type="button"
                className={`page-btn ${currentPage === page ? 'page-active' : ''
                }`}
                onClick={() => onPageChange(page)}
              >
                <p className="page-text">{page}</p>
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            onPageChange(Math.min(currentPage + 1, total));
            scrollToTop();
          }}
          type="button"
          className="arrow-btn pagination-btn"
        >
          <SvgArrowRight className="arrow-image pagination-img" />
        </button>
      </div>
    </>
  );
};
