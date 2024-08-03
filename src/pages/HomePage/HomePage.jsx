import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { ApiGetListUser } from '../../redux/api/ApiUser';
import { useDispatch, useSelector } from 'react-redux';
import User from '../../components/User/User';
import Section from '../../components/Section/Section';
import UserHeading from '../../components/UserHeading/UserHeading';
import Pagination from '../../components/Pagination/Pagination';
import { getPages } from '../../redux/slider/stateSlider';

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const page = useSelector((state) => state.state.page);
  useEffect(() => {
    ApiGetListUser(dispatch, page);
  }, [page]);

  useEffect(() => {
    const queryString = window.location.search;
    const startIndex = queryString.indexOf('?') + 1;
    const endIndex = queryString.indexOf('&');

    if (startIndex !== -1 && endIndex !== -1) {
      const queryValue = queryString.substring(startIndex, endIndex).slice(5);
      dispatch(getPages(parseInt(queryValue)));
    } else if (startIndex !== -1) {
      dispatch(getPages(1));
    }
  }, []);

  return (
    <main className="w-full h-max">
      <Navbar />
      <div className="fixed top-0 left-16 sm:left-24 p-10 pl-2 h-[100vh] overflow-y-auto">
        <h2 className="text-2xl font-medium mb-6">Customers</h2>
        <Section />
        <UserHeading />
        <div className="w-full h-max border-b-1 border-solid border-[#ccc] mb-4">
          {users?.map((user, index) => {
            return <User key={index} user={user} />;
          })}
        </div>
        <Pagination />
      </div>
    </main>
  );
};

export default HomePage;
