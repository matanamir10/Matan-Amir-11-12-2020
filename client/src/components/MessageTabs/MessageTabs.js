import React from 'react';
import { Tabs, Tab } from '@material-ui/core';

export const MessageTabs = ({ value, handleChange }) => {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label='simple tabs example'
      centered>
      <Tab label='Sent' {...a11yProps(0)} />
      <Tab label='Reccived' {...a11yProps(1)} />
    </Tabs>
  );
};
