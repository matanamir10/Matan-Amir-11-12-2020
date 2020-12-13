import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Delete, Info } from '@material-ui/icons';
import { MessageType } from '../../constants/messageType';

export const MessageItem = ({ message, prefix, handleDelete, moveToRoute }) => {
  let primaryText = `${prefix}: ${message.recciverId}`;
  if (prefix === MessageType.From) {
    primaryText = `${prefix}: ${message.senderId}`;
  }
  return (
    <ListItem>
      <ListItemText primary={primaryText} secondary={message.createdAt} />
      <ListItemSecondaryAction>
        <IconButton
          edge='end'
          aria-label='delete'
          onClick={handleDelete.bind(null, message.id, prefix)}>
          <Delete />
        </IconButton>
        <IconButton
          edge='end'
          aria-label='delete'
          onClick={moveToRoute.bind(null, message)}>
          <Info />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
