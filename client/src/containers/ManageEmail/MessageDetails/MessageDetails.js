import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteMessage from '../../../components/MessageList/DeleteMessage';
import { MessageTabs } from '../../../components/MessageTabs/MessageTabs';
import { MessageList } from '../../../components/MessageList/MessageList';
import { MessageTab } from '../../../components/MessageTabs/MessageTab/MessageTab';
import { MessageType } from '../../../constants/messageType';

const MessageDetails = () => {
  const [deleteModal, setDeleteModal] = React.useState({
    visible: false,
    messageId: null,
    currentPrefix: null,
  });
  const [tabsValue, setTabsValue] = useState(0);
  const { messagesSent, messagesReccived } = useSelector(
    (state) => state.message
  );

  const openErrorModal = (id, prefix) => {
    setDeleteModal({ visible: true, messageId: id, currentPrefix: prefix });
  };

  const closeErrorModal = () => {
    setDeleteModal({ visible: false, messageId: null, currentPrefix: null });
  };

  const handleChange = (event, newValue) => {
    setTabsValue(newValue);
  };

  return (
    <div className='message-details'>
      <DeleteMessage modalDetails={deleteModal} handleClose={closeErrorModal} />
      <MessageTabs value={tabsValue} handleChange={handleChange} />
      <MessageTab value={tabsValue} index={0}>
        <MessageList
          messages={messagesSent}
          prefix={MessageType.To}
          openErrorModal={openErrorModal}
        />
      </MessageTab>
      <MessageTab value={tabsValue} index={1}>
        <MessageList
          messages={messagesReccived}
          prefix={MessageType.From}
          openErrorModal={openErrorModal}
        />
      </MessageTab>
    </div>
  );
};

export default MessageDetails;
