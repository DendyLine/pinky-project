import { Form, Formik } from 'formik';
import React from 'react';
import { Input } from 'src/components/Input';
import { useAppDispatch } from 'src/redux/store';
import { signIn, signUp } from 'src/redux/usersSlice';
import 'src/styles/form.css';
import { IUserCreate } from 'src/types';
import { object, string } from 'yup';

const validationSchema = object({
  username: string().min(4).max(16).required(),
  password: string().min(4).max(16).required(),
});

const SignInPage = () => {
  const dispatch = useAppDispatch();
  const createUser = (values: IUserCreate) => {
    dispatch(signIn(values));
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{username: '', password: ''}}
      onSubmit={createUser}
    >
      {({isValid}) => (
        <Form className='form'>
          <Input label='Username' name='username' />
          <Input label='password' name='password' type='password' />
          <button disabled={!isValid} type='submit'>
            Sign-in
          </button>
        </Form>
      )}
    </Formik>
  );

};

export default SignInPage;