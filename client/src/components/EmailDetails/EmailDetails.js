import React from 'react';
import './EmailDetails.scss';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../store/actions/message';
import withErrorHandler from '../../withErrorHandler/withErrorHandler';

const EmailDetails = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const searchUserRelatedMessages = () => {
    dispatch(getMessages(auth.user.userId));
  };
  return (
    <div className='email-details'>
      <Button
        className='email-details__cta'
        type='submit'
        variant='contained'
        color='secondary'
        onClick={searchUserRelatedMessages}>
        Get All Messages
      </Button>
    </div>
  );
};

export default withErrorHandler(EmailDetails);
