import React from 'react';
import './EmailDetails.scss';
import { Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { getMessages } from '../../store/actions/message';
import { Input } from '../../UI/Input';

export const EmailDetails = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userId: '',
    },
    validationSchema: Yup.object({
      userId: Yup.string().required('UserId is required'),
    }),
    onSubmit: ({ userId }) => {
      console.log(userId);
      dispatch(getMessages(userId));
    },
  });
  return (
    <div className='email-details'>
      <form
        className='email-details__form'
        noValidate
        autoComplete='off'
        onSubmit={formik.handleSubmit}>
        <Input
          className='email-details__input'
          label='UserId'
          id='userId'
          name='userId'
          type='text'
          error={formik.touched.userId && formik.errors.userId}
          errorMessage={formik.errors.userId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userId}
        />
        <Button
          className='email-details__cta'
          type='submit'
          variant='contained'
          color='secondary'
          disabled={!formik.isValid}>
          Get All Messages
        </Button>
      </form>
    </div>
  );
};
