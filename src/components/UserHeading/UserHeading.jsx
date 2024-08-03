import React from 'react';
import { RxCaretSort } from 'react-icons/rx';
const UserHeading = () => {
  return (
    <section className="w-full h-10 flex items-center justify-start gap-3 border-b-1 border-[#ccc] border-solid text-[#aeb0a9] pl-5">
      <div className="w-[370px] flex gap-2 sm:w-[250px]">
        <h3 className="font-medium pl-3">Name</h3>
        <RxCaretSort className="w-6 h-6" />
      </div>
      <div className="w-[195px] flex gap-2 sm:w-[160px]">
        <h3 className="font-medium ">Username</h3>
        <RxCaretSort className="w-6 h-6" />
      </div>
      <div className="w-[345px] flex gap-2">
        <p className="font-normal">Email</p>
        <RxCaretSort className="w-6 h-6" />
      </div>
      <div className="w-[150px] flex gap-2">
        <p className="font-normal">Register date</p>
        <RxCaretSort className="w-6 h-6" />
      </div>
      <div className="flex gap-2">
        <p>Country</p>
        <RxCaretSort className="w-6 h-6" />
      </div>
    </section>
  );
};

export default UserHeading;
