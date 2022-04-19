import React from 'react';

const InputOther = (props) => {
  const { register, type, placeholder, className, name } = props;

  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};

export default InputOther;
