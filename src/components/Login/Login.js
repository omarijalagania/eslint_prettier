import React from 'react';
import Btn from '../Ui/Btn/Btn';
import Input from '../Ui/Input/Input';
import Line from '../Ui/Line/Line';

const Login = () => {
  return (
    <div className='min-h-screen bg-gray-200 md:pt-20'>
      <div className='max-w-[700px] p-3 mx-auto'>
        {/* Header */}
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
        <div className=' mt-10 flex flex-col justify-center items-center md:mt-20'>
          <h1 className='text-2xl mb-1 font-semibold md:text-4xl'>
            Welcome Back
          </h1>
          <h3 className='text-sm text-gray-600 font-light md:text-lg'>
            Login into your account
          </h3>

          {/* Buttons */}
          <div className='flex mt-10 space-x-4'>
            <Btn icon='google' name='Google' />
            <Btn icon='facebook' name='Facebook' />
          </div>
          {/* Line */}
          <div className='flex justify-between my-9 items-center'>
            <Line />
            <p className='mx-3 text-xs text-center md:text-sm'>
              Or continue with
            </p>
            <Line />
          </div>
          {/* Inputs */}
          <div className='flex flex-col mb-20 space-y-8'>
            <Input type='email' name='email' placeholder='Email' />
            <Input type='password' name='password' placeholder='Password' />
          </div>
          {/* Login Button */}
          <button
            type='button'
            className='w-64 h-16 border-2 text-sm font-normal border-gray-400 rounded-md md:w-96'
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
