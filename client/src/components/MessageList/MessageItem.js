import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Delete, Info } from '@material-ui/icons';

export const MessageItem = ({ message, prefix }) => {
  return (
    <ListItem>
      <ListItemText
        primary={`${prefix}: ${message.recciverId}`}
        secondary={message.createdAt}
      />
      <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='delete'>
          <Delete />
        </IconButton>
        <IconButton edge='end' aria-label='delete'>
          <Info />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
