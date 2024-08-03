import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { ApiGetListUser } from '../../redux/api/ApiUser';
import { useDispatch, useSelector } from 'react-redux';
import User from '../../components/User/User';
import Section from '../../components/Section/Section';
import moment from 'moment';
import UserHeading from '../../components/UserHeading/UserHeading';
import Pagination from '../../components/Pagination/Pagination';

const HomePage = () => {
  const pageRef = useRef();
  const dispath = useDispatch();
  const users = useSelector((state) => state.user.users);
  const page = useSelector((state) => state.user.page);
  useEffect(() => {
    ApiGetListUser(dispath, page);
  }, [page]);

  const handleClick = () => {
    console.log('scroll');

    window.scrollTo(0, 0);
  };

  return (
    <main className="w-full" ref={pageRef}>
      <Navbar />
      <div className="fixed top-0 left-24 p-10 h-[100vh] overflow-y-auto">
        <h2 className="text-2xl font-medium mb-6">Customers</h2>
        <Section />
        <UserHeading />
        <div className="w-full h-max border-b-1 border-solid border-[#ccc] mb-4">
          {users?.map((user, index) => {
            return <User key={index} user={user} />;
          })}
        </div>
        <Pagination handleClick={handleClick} />
      </div>
    </main>
  );
};

export default HomePage;
