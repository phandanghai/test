import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPages } from '../../redux/slider/UserSlider';
import { useDispatch, useSelector } from 'react-redux';

export default function Pagination({ handleClick }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.user.page);
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
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
                  handleClick();
                }}
                style={
                  page === i
                    ? {
                        backgroundColor: '#4f46e5',
                        color: 'white',
                      }
                    : {}
                }
                className={`relative bg-white border-1 border-[#ccc] hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-20 md:inline-flex`}
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
