import React, { useContext } from 'react';
import { FormContext } from '../../store/RegisterContext/formContext';
import { registerSchema } from '../../schema/RegisterSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../Ui/Input';
import Error from '../Ui/Error';
import Button from '../Ui/Button';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { onSubmit } = useContext(FormContext);

  return (
    <div className='flex flex-col max-w-md mx-auto mt-20'>
      <form
        className='p-10 shadow-md bg-gray-50 rounded-lg flex flex-col space-y-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='py-4 text-center text-3xl'>Register</h2>

        <Input
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.firstName?.message ? 'border-red-700' : 'border-gray-300'
          } rounded-md`}
          name='firstName'
          placeholder='First Name'
          type='text'
          register={register}
        />
        {errors.firstName && <Error>{errors.firstName.message}</Error>}
        <Input
          type='text'
          name='lastName'
          register={register}
          placeholder='Last Name'
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.lastName?.message ? 'border-red-700' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.lastName && <Error>{errors.lastName.message}</Error>}
        <Input
          type='email'
          name='email'
          placeholder='Email'
          register={register}
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.email?.message ? 'border-red-700' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
        <Input
          type='password'
          name='password'
          placeholder='Password'
          register={register}
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.password?.message ? 'border-red-700' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
        <Input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          register={register}
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.confirmPassword?.message
              ? 'border-red-700'
              : 'border-gray-300'
          } rounded-md`}
        />
        {errors.confirmPassword && (
          <Error>{errors.confirmPassword.message}</Error>
        )}
        <Button
          color='bg-blue-700'
          hover='hover:bg-blue-600'
          textCol='text-white'
          type='submit'
          text='Register'
        />
      </form>
    </div>
  );
};

export default Register;
