import React from 'react';
import './MessageList.scss';
import { useSelector } from 'react-redux';

export const MessageList = () => {
  const { messages } = useSelector((state) => state.message);

  return (
    <div className='messages-list'>
      <h1>List messaged</h1>
    </div>
  );
};

export default MessageList;
