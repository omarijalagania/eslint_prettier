import React, { useReducer } from 'react';
import { FormContext } from './formContext';
import { reducer } from './RegisterReducer';

const ContextProvider = ({ children }) => {
  //useForm Submit Function

  const onSubmit = (data) => {
    dispatchAction({ type: 'SET_FIRST_NAME', payload: data.firstName });
    dispatchAction({ type: 'SET_LAST_NAME', payload: data.lastName });
    dispatchAction({ type: 'SET_EMAIL', payload: data.email });
    dispatchAction({ type: 'SET_PASSWORD', payload: data.password });
    dispatchAction({
      type: 'SET_CONFIRM_PASSWORD',
      payload: data.confirmPassword,
    });

    console.log(data);
  };
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    onSubmit: onSubmit,
  };

  const [state, dispatchAction] = useReducer(reducer, initialState);

  return <FormContext.Provider value={state}>{children}</FormContext.Provider>;
};

export default ContextProvider;
