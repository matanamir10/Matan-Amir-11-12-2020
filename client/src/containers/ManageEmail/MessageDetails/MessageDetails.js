import React, { useState } from 'react';
import { MessageTabs } from '../../../components/MessageTabs/MessageTabs';
import { MessageList } from '../../../components/MessageList/MessageList';
import { MessageTab } from '../../../components/MessageTabs/MessageTab/MessageTab';

export const MessageDetails = () => {
  const [tabsValue, setTabsValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setTabsValue(newValue);
  };

  return (
    <div className='message-details'>
      <MessageTabs value={tabsValue} handleChange={handleChange} />
      <MessageTab value={tabsValue} index={0}>
        Matan
      </MessageTab>
      <MessageTab value={tabsValue} index={1}>
        Leimech
      </MessageTab>
      {/* <MessageList /> */}
    </div>
  );
};
