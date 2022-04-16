import React, { useContext } from 'react';
import { FormContext } from '../../store/RegisterContext/formContext';
import { registerSchema } from '../../schema/RegisterSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// import Input from '../Ui/Input';
// import Error from '../Ui/Error';
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
        className='p-10 shadow-md bg-gray-50 rounded-lg flex flex-col space-y-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='py-4 text-center text-3xl'>Register</h2>
        <input
          type='text'
          name='firstName'
          {...register('firstName')}
          placeholder='First Name'
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.firstName?.message ? 'border-red-700' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.firstName && (
          <p className='text-red-700'>{errors.firstName.message}</p>
        )}
        <input
          type='text'
          name='lastName'
          {...register('lastName')}
          placeholder='Last Name'
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.lastName?.message ? 'border-red-700' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.lastName && (
          <p className='text-red-700'>{errors.lastName.message}</p>
        )}
        <input
          type='email'
          name='email'
          placeholder='Email'
          {...register('email')}
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.email?.message ? 'border-red-700' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
        <input
          type='password'
          name='password'
          placeholder='Password'
          {...register('password')}
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.password?.message ? 'border-red-700' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.password && (
          <p className='text-red-700'>{errors.password.message}</p>
        )}
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          {...register('confirmPassword')}
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.confirmPassword?.message
              ? 'border-red-700'
              : 'border-gray-300'
          } rounded-md`}
        />
        {errors.confirmPassword && (
          <p className='text-red-700'>{errors.confirmPassword.message}</p>
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
