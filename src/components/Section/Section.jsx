import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';
const Section = () => {
  return (
    <section className="w-[1220px] flex border-b-1 border-solid border-[#ccc] relative">
      <div className="flex px-4 py-2 gap-2 border-b-2 border-solid border-[#4f7e00]">
        <p>User</p>
        <div className="bg-[#ccc] text-[#4f7e00] rounded-lg w-6 h-6 flex items-center justify-center text-sm">
          10
        </div>
      </div>
      <div className="flex px-4 py-2 gap-2">
        <p>Total User</p>
        <div className="bg-[#ccc] text-[#4f7e00] rounded-lg px-4 w-6 h-6 flex items-center justify-center text-sm">
          100
        </div>
      </div>
      <div className="absolute top-0 right-0 flex gap-1">
        <div className="flex px-4 py-2 gap-2">
          <p>Search</p>
        </div>

        <div className="flex px-4 items-center justify-center py-2 gap-2">
          <IoMdSearch className="w-5 h-5" />
        </div>
        <div className="flex px-4 items-center justify-center py-2 gap-2">
          <IoAdd className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default Section;
