import React, { useReducer } from 'react';
import { FormContext } from './formContext';
import { reducer } from './RegisterReducer';

const ContextProvider = ({ children }) => {
  //useForm Submit Function

  const onSubmit = (data) => {
    dispatchAction({ type: 'SET_NAME', payload: data.name });
    dispatchAction({ type: 'SET_Email', payload: data.email });
  };
  const initialState = {
    name: '',
    email: '',
    onSubmit: onSubmit,
  };

  const [state, dispatchAction] = useReducer(reducer, initialState);

  return <FormContext.Provider value={state}>{children}</FormContext.Provider>;
};

export default ContextProvider;
