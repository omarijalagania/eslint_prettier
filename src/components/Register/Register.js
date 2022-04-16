import React, { useContext } from 'react';
import { FormContext } from '../../store/RegisterContext/formContext';
import { useForm } from 'react-hook-form';
import Input from '../Ui/Input';
import Error from '../Ui/Error';
import Button from '../Ui/Button';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { onSubmit } = useContext(FormContext);

  return (
    <div className='flex flex-col max-w-md mx-auto mt-20'>
      <form
        className='p-10 shadow-md flex flex-col space-y-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.name ? 'border-red-700' : 'border-gray-300'
          } rounded-md`}
          type='text'
          name='name'
          placeholder='Name'
          register={register}
        />
        {errors.name && <Error>{errors.email.message}</Error>}

        {/* <input */}

        <Input
          className={`sm:text-sm border-2 p-2 outline-none ${
            errors.email ? 'border-red-700' : 'border-gray-300'
          }  rounded-md`}
          type='email'
          name='email'
          placeholder='Email'
          register={register}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
        <Button
          color='bg-blue-700'
          hover='hover:bg-blue-600'
          textCol='text-white'
          type='submit'
          text='Subscribe'
        />
      </form>
    </div>
  );
};

export default Register;
