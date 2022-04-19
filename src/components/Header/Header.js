import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <img
        className='w-28 cursor-pointer md:w-48'
        src='https://redberry.international/wp-content/uploads/2022/01/redberrylogo.svg'
        alt='logo'
      />
      <p className='hidden font-light md:block'>
        Don’t have an account?
        <a className='text-red-500 ml-1' href='/test'>
          Sign up!
        </a>
      </p>
      {/* mobile menu icon */}
      <img
        className='w-5 h-5 cursor-pointer md:hidden'
        src='/images/menu.png'
        alt='mobile-menu'
      />
    </div>
  );
};

export default Header;
