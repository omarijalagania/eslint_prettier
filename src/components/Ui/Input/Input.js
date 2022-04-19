import React from 'react';

const Input = ({ type, name, placeholder }) => {
  return (
    <input
      className='w-64 h-16 text-sm border-2 border-gray-300 rounded-md pl-4 outline-none md:w-96'
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
