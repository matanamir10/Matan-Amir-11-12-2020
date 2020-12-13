import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Delete, Info } from '@material-ui/icons';

export const MessageItem = ({ message, prefix, handleDelete, moveToRoute }) => {
  return (
    <ListItem>
      <ListItemText
        primary={`${prefix}: ${message.recciverId}`}
        secondary={message.createdAt}
      />
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
