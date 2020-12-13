import React from 'react';
import './Auth.scss';
import {
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Paper,
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../store/actions/auth';
import { AuthOptions } from '../../constants/authOptions';
import { Input } from '../../UI/Input';
import withErrorHandler from '../../withErrorHandler/withErrorHandler';

const Auth = ({ history }) => {
  const disptach = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      userId: '',
      authMethod: AuthOptions.SIGNIN,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      userId: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      let url = `/api/users/${values.authMethod}`;
      disptach(authenticate(url, values));
    },
  });

  return (
    <Paper elevation={10} className='auth' title='We Study Authentication'>
      <form onSubmit={formik.handleSubmit} className='auth__form'>
        <RadioGroup
          className='auth__radio'
          aria-label='method'
          name='authMethod'
          value={formik.values.authMethod}
          onChange={formik.handleChange}>
          <FormControlLabel
            value={AuthOptions.SIGNIN}
            control={<Radio />}
            label='Sign In'
          />
          <FormControlLabel
            value={AuthOptions.SIGNUP}
            control={<Radio />}
            label='Sign Up'
          />
        </RadioGroup>
        <Input
          label='Email'
          className='auth__input'
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          errorMessage={formik.errors.email}
          variant='outlined'
        />
        <Input
          label='UserId'
          className='auth__input'
          id='userId'
          name='userId'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.userId}
          error={formik.touched.userId && formik.errors.userId}
          errorMessage={formik.errors.userId}
          variant='outlined'
        />
        <Button type='submit' variant='contained' color='primary' fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default withErrorHandler(Auth);
