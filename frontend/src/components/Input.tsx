import { ErrorMessage, Field } from 'formik';
import { FieldAttributes } from 'formik/dist/Field';
import React from 'react';

export const Input = ({label,name, ...fieldProps}: FieldAttributes<any> & {label?: string}) => {
  return (
    <label>
      {label}
      <Field {...fieldProps} name={name} />
      <ErrorMessage component='em' className='error-message' name={name}/>
    </label>
  );
};