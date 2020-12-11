import React from 'react';
import './CreateEmail.scss';
import { TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
      <TextField
        className='create-email__input'
        label='Subject'
        id='subject'
        name='subject'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.subject && formik.errors.subject ? (
        <div>{formik.errors.subject}</div>
      ) : null}
      <TextField
        label='Message'
        id='message'
        name='message'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        rows={4}
        rowsMax={8}
      />
      {formik.touched.message && formik.errors.message ? (
        <div>{formik.errors.message}</div>
      ) : null}
      <TextField
        label='Sender Id'
        id='senderId'
        name='senderId'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.senderId}
      />
      {formik.touched.senderId && formik.errors.senderId ? (
        <div>{formik.errors.senderId}</div>
      ) : null}
      <TextField
        label='Recciver Id'
        id='recciverId'
        name='recciverId'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.recciverId}
      />
      {formik.touched.recciverId && formik.errors.recciverId ? (
        <div>{formik.errors.recciverId}</div>
      ) : null}
    </form>
  );
};
