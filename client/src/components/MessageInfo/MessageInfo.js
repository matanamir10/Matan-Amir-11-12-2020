import React from 'react';
import './MessageInfo.scss';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';

export const MessageInfo = ({ history }) => {
  const { message } = history.location.state;
  return (
    <List
      className='message-info'
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Message Details
        </ListSubheader>
      }>
      {Object.keys(message).map((key) => {
        return (
          <ListItem>
            <ListItemText primary={key} secondary={message[key]} />
          </ListItem>
        );
      })}
      <Button
        variant='contained'
        className='message-info__btn'
        color='primary'
        onClick={() => {
          history.goBack();
        }}>
        Back
      </Button>
      <Button
        variant='contained'
        className='message-info__btn'
        color='secondary'>
        Delte
      </Button>
    </List>
  );
};
