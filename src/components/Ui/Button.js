import React from 'react';

const Button = ({ type, color, text, hover, textCol }) => {
  return (
    <button
      className={`${color} ${hover} ${textCol} p-3 rounded-md`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
