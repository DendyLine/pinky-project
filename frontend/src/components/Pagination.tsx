import { Link, useLocation } from 'react-router-dom';

interface IPaginationProps {
  numOfPages: number;
}

const Pagination = (props: IPaginationProps) => {
  const {pathname, search} = useLocation();
  const params = new URLSearchParams(search);
  const currentPage = Number(params.get('page') ?? 1);

  return (
    <div className='pagination__container'>

      {Array.from({length: props.numOfPages}).map((_, i) => (
        <Link
          className={i + 1 === currentPage ? 'active-page' : ''}
          to={`${pathname}?page=${i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );

};
export default Pagination;