import React from 'react';
import './ManageEmail.scss';
import { MessageDetails } from './MessageDetails/MessageDetails';
import { EmailDetails } from '../../components/EmailDetails/EmailDetails';

const ManageEmail = () => {
  return (
    <div className='manage-details'>
      <EmailDetails />
      <MessageDetails />
    </div>
  );
};
export default ManageEmail;
