import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Delete, Info } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

export const MessageItem = ({ message, prefix }) => {
  const history = useHistory();
  const routeToMessageInfo = () => {
    history.push(`${history.location.pathname}/messageInfo/${message.id}`, {
      message,
    });
  };
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
        <IconButton edge='end' aria-label='delete' onClick={routeToMessageInfo}>
          <Info />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
