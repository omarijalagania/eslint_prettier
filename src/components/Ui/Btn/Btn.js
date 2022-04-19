import React from 'react';

const Btn = ({ icon, name }) => {
  return (
    <div className='w-28 border-2 border-transparent hover:border-green-400  h-10 flex justify-center items-center rounded-md cursor-pointer bg-white'>
      <img className='w-5 h-5 mr-2' src={`/images/${icon}.png`} alt={name} />
      <p className='text-sm font-medium'>{name}</p>
    </div>
  );
};

export default Btn;
