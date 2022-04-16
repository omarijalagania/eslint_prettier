import React from 'react';

const Input = (props) => {
  const { register, type, placeholder, className, name } = props;

  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name, { required: `${name} required` })}
    />
  );
};

export default Input;
