import React, { useState } from 'react';
import { IoHome } from 'react-icons/io5';
import { IoMdMailOpen } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';
import { RiDeviceFill } from 'react-icons/ri';
import { RxAvatar } from 'react-icons/rx';
import { BiCertification } from 'react-icons/bi';
const Navbar = () => {
  const narbarData = [
    { title: 'Home', icon: IoHome },
    { title: 'BoxMail', icon: IoMdMailOpen },
    { title: 'Users', icon: FaUserTie },
    { title: 'Certification', icon: RiDeviceFill },
  ];
  const [active, setActive] = useState('Users');
  return (
    <section className="flex flex-col h-[100vh] w-16 border-r-1 border-[#ddd] border-solid">
      <div className="w-16 h-16 flex items-center justify-center">
        <RxAvatar className="w-10 h-10 rounded-full" />
      </div>

      <div
        style={{
          height: 'calc(100vh - 50px)',
          overflowX: 'hidden',
          padding: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <menu className="h-40 w-16 justify-center16 flex flex-col items-center gap-4">
          {narbarData.map((icon, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-16 h-16 text-gray-800 hover:text-gray-700 `}
              style={
                active === icon.title
                  ? {
                      borderRight: '4px solid #4f7e00',
                    }
                  : {}
              }
            >
              <icon.icon className="w-5 h-5" />
            </div>
          ))}
        </menu>
      </div>
    </section>
  );
};

export default Navbar;
