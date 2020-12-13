import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../store/actions/message';
import withErrorHandler from '../../withErrorHandler/withErrorHandler';
import { toast } from 'react-toastify';

const DeleteMessage = ({ modalDetails, handleClose }) => {
  const dispatch = useDispatch();

  const handleDeleteMessage = async () => {
    await dispatch(
      deleteMessage(modalDetails.messageId, modalDetails.currentPrefix)
    );
    handleClose();
    toast.info('Message was deleted', {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <Dialog
      open={modalDetails.visible}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>Are you sure ?</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          The message will be deleted !
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleDeleteMessage} color='secondary' autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withErrorHandler(DeleteMessage);
