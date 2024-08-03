import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { getPages } from '../../redux/slider/stateSlider';
import { useDispatch, useSelector } from 'react-redux';

export default function Pagination() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.state.page);
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
              <Link
                key={i}
                to={`/?page=${i}&results=10`}
                onClick={() => {
                  dispatch(getPages(i));
                }}
                style={
                  page === i
                    ? {
                        backgroundColor: '#4f46e5',
                        color: 'white',
                      }
                    : {}
                }
                className={`relative bg-white border-1 border-[#ccc] items-center px-2 py-1 sm:px-4 sm:py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-20 inline-flex `}
              >
                {i}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
