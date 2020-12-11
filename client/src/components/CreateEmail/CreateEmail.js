import React from 'react';
import './CreateEmail.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../UI/Input';

export const CreateEmail = () => {
  const formik = useFormik({
    initialValues: {
      subject: '',
      message: '',
      senderId: '',
      recciverId: '',
    },
    validationSchema: Yup.object({
      subject: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      message: Yup.string().required('Required'),
      senderId: Yup.string().required('Required'),
      recciverId: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className='create-email__form' noValidate autoComplete='off'>
      <Input
        label='Subject'
        id='subject'
        name='subject'
        type='text'
        error={formik.touched.subject && formik.errors.subject}
        errorMessage={formik.errors.subject}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
      />
      <Input
        label='Message'
        id='message'
        name='message'
        type='text'
        error={formik.touched.message && formik.errors.message}
        errorMessage={formik.errors.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        rows={4}
        rowsMax={8}
      />
      <Input
        label='Sender Id'
        id='senderId'
        name='senderId'
        type='text'
        error={formik.touched.senderId && formik.errors.senderId}
        errorMessage={formik.errors.senderId}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.senderId}
      />
      <Input
        label='Recciver Id'
        id='recciverId'
        name='recciverId'
        type='text'
        error={formik.touched.recciverId && formik.errors.recciverId}
        errorMessage={formik.errors.recciverId}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.recciverId}
      />
    </form>
  );
};
