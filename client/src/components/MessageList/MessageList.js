import React from 'react';
import { List } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MessageItem } from './MessageItem';

export const MessageList = ({ messages, prefix, openErrorModal }) => {
  const history = useHistory();
  const routeToMessageInfo = (message) => {
    history.push(`${history.location.pathname}/messageInfo/${message.id}`, {
      message,
    });
  };
  const handleDelete = (id, prefix) => {
    openErrorModal(id, prefix);
  };

  return (
    <List dense={true} className='messages-list'>
      {messages.map((msg) => (
        <MessageItem
          message={msg}
          prefix={prefix}
          handleDelete={handleDelete}
          moveToRoute={routeToMessageInfo}
        />
      ))}
    </List>
  );
};

export default MessageList;
