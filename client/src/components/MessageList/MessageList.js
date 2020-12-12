import React from 'react';
import { List } from '@material-ui/core';
import { MessageItem } from './MessageItem';

export const MessageList = ({ messages, prefix }) => {
  return (
    <List dense={true} className='messages-list'>
      {messages.map((msg) => (
        <MessageItem message={msg} prefix={prefix} />
      ))}
    </List>
  );
};

export default MessageList;
