import { Form, Formik } from 'formik';
import React from 'react';
import { Input } from 'src/components/Input';
import { useAppDispatch } from 'src/redux/store';
import { signUp } from 'src/redux/usersSlice';
import 'src/styles/form.css';
import { IUserCreate } from 'src/types';
import { object, string } from 'yup';

const validationSchema = object({
  username: string().min(4).max(16).required(),
  password: string().min(4).max(16).required(),
  country: string().min(1).max(16),
  town: string().min(1).max(16),
  avaUrl: string()
});

const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const createUser = (values: IUserCreate) => {
    dispatch(signUp(values));
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
          <Input label='country' name='country' />
          <Input label='town' name='town' />
          <Input label='avaURL' name='avaURL' />
          <button disabled={!isValid} type='submit'>
            create user
          </button>
        </Form>
      )}
    </Formik>
  );

};

export default SignUpPage;