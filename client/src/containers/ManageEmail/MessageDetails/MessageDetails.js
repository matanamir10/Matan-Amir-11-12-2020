import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MessageTabs } from '../../../components/MessageTabs/MessageTabs';
import { MessageList } from '../../../components/MessageList/MessageList';
import { MessageTab } from '../../../components/MessageTabs/MessageTab/MessageTab';

export const MessageDetails = () => {
  const [tabsValue, setTabsValue] = useState(0);
  const { messagesSent, messagesReccived } = useSelector(
    (state) => state.message
  );
  console.log(messagesSent);
  console.log(messagesReccived);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setTabsValue(newValue);
  };

  return (
    <div className='message-details'>
      <MessageTabs value={tabsValue} handleChange={handleChange} />
      <MessageTab value={tabsValue} index={0}>
        <MessageList messages={messagesSent} prefix='To' />
      </MessageTab>
      <MessageTab value={tabsValue} index={1}>
        <MessageList messages={messagesReccived} prefix='From' />
      </MessageTab>
    </div>
  );
};
