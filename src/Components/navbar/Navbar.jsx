import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../Assets/logo-capra.png'; // Replace with the path to your logo image

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items for left and right
  const leftNavItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
  ];

  const rightNavItems = [
    { id: 1, text: 'Work' },
    { id: 2, text: 'Contact' },
  ];

  return (
    <div className='pt-6 px-4 lg:px-0'>
    <div className='bg-[#FFF7F4] z-50 border-[3px] rounded-[30px] border-[#181919] flex justify-center items-center h-[55px] navbar-shadow mx-auto px-4 text-[#181919] lg:w-fit'>
      <div className='flex items-center justify-between w-full'>
        {/* Left Navigation */}
        <div className='hidden md:flex font-custom uppercase mr-6 space-x-0'>
          <ul className='flex text-[16px] leading-[14.4px] space-x-0'>
            {leftNavItems.map(item => (
              <li
                key={item.id}
                className='p-4 rounded-xl cursor-pointer duration-300 hover:text-black'
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Logo Image */}
        <img src={logo} alt="Logo" className='w-[40px] h-[40px] object-cover' /> {/* Adjust height as needed */}

        {/* Right Navigation */}
        <div className='hidden md:flex font-custom uppercase ml-6 space-x-0'>
          <ul className='flex text-[16px] leading-[14.4px] space-x-0'>
            {rightNavItems.map(item => (
              <li
                key={item.id}
                className='p-4 rounded-xl cursor-pointer duration-300 hover:text-black'
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed md:hidden text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>CAPRA</h1>

        {/* Mobile Navigation Items */}
        {leftNavItems.concat(rightNavItems).map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Navbar;