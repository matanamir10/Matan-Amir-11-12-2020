import React from 'react';
import './ManageEmail.scss';
import { Switch, Route } from 'react-router-dom';
import MessageDetails from './MessageDetails/MessageDetails';
import EmailDetails from '../../components/EmailDetails/EmailDetails';
import { MessageInfo } from '../../components/MessageInfo/MessageInfo';

const ManageEmail = () => {
  return (
    <Switch>
      <Route path='/manage/messageInfo/:id' exact component={MessageInfo} />
      <Route
        render={() => (
          <div className='manage-details'>
            <EmailDetails />
            <MessageDetails />
          </div>
        )}
      />
    </Switch>
  );
};
export default ManageEmail;
