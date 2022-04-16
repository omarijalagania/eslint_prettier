import * as yup from 'yup';

export const registerSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();
