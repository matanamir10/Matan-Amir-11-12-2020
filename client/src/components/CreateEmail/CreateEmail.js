import React from 'react';
import './CreateEmail.scss';
import { Button, Paper } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage } from '../../store/actions/message';
import { Input } from '../../UI/Input';
import withErrorHandler from '../../withErrorHandler/withErrorHandler';
import { toast } from 'react-toastify';

const CreateEmail = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      subject: '',
      message: '',
      recciverId: '',
    },
    validationSchema: Yup.object({
      subject: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      message: Yup.string().required('Required'),
      recciverId: Yup.string().required('Required'),
    }),
    onSubmit: async (messageValues) => {
      await dispatch(
        createMessage({ ...messageValues, senderId: user.userId })
      );
      formik.resetForm();
      toast.success('Message was created', {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  });

  return (
    <Paper className='create-email' elevation={5}>
      <form
        className='create-email__form'
        noValidate
        autoComplete='off'
        onSubmit={formik.handleSubmit}>
        <Input
          className='create-email__input'
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
          className='create-email__input'
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
          className='create-email__input'
          label='Sender Id'
          id='senderId'
          name='senderId'
          type='text'
          value={user.userId}
        />
        <Input
          className='create-email__input'
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
        <Button
          className='create-email__cta'
          type='submit'
          variant='contained'
          color='primary'
          disabled={!formik.isValid}>
          Send
        </Button>
      </form>
    </Paper>
  );
};

export default withErrorHandler(CreateEmail);
