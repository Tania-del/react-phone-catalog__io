import { FC } from 'react';
import SvgArrowLeft from '../icons/ArrowLeft';
import SvgArrowRight from '../icons/ArrowRight';
import '../styles/Pagination.scss';

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
  // const pageNumbers = [];

  const generatePages = (number: number) => {
    const result = [];

    for (let i = 1; i <= number; i += 1) {
      result.push(i);
    }

    return result;
  };

  // for (let i = 1; i <= Math.ceil(total / perPage); i += 1) {
  //   pageNumbers.push(i);
  // }

  // const indexOfLastPost = currentPage * perPage;
  // const indexOfFirstPost = indexOfLastPost - perPage;
  // const currentPosts = total.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        type="button"
        className="arrow-btn pagination-btn"
      >
        <SvgArrowLeft className="arrow-image pagination-img" />
      </button>
      <ul className="pagination-list">
        {generatePages(total).map((page) => (
          <li key={page} className="page">
            <button type="button" className="page-btn">
              <p className="page-text">{page}</p>
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, total))}
        type="button"
        className="arrow-btn pagination-btn"
      >
        <SvgArrowRight className="arrow-image pagination-img" />
      </button>
    </div>
  );
};
