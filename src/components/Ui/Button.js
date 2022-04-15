import React from 'react';

const Button = ({ type, color, text }) => {
  return (
    <button className={`bg-${color}-700 text-white p-3 rounded-md`} type={type}>
      {text}
    </button>
  );
};

export default Button;
