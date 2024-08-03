import React, { useEffect } from 'react';
import moment from 'moment';

const User = ({ user }) => {
  return (
    <main className="w-full h-12 flex items-center justify-start gap-3 rounded-md hover:bg-[#ddd] px-4 cursor-pointer">
      <div className="w-[60px] flex items-center justify-center">
        <img
          src={user?.picture?.thumbnail}
          alt="image-user"
          className="rounded-full h-8 w-8"
        />
      </div>
      <h3 className="font-medium w-[300px] sm:w-[180px]">{`${user?.name.first} ${user?.name.last}`}</h3>
      <h3 className="font-medium w-[200px] sm:w-[160px]">{`${user?.login.username}`}</h3>
      <p className="font-normal w-[350px]">{user?.email}</p>
      <p className="font-normal w-[150px]">
        {moment(user?.registered.date).format('DD.MM.YYYY')}
      </p>
      <p>{user?.location.country}</p>
    </main>
  );
};

export default User;
