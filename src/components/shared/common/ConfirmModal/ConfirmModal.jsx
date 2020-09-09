import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { LOCALE } from '../../../../locale';

const ConfirmModal = ({ headline, body, open, onClose, onSubmit }) => {
  const locale = LOCALE.common.confirmModal.actions;

  const handleClose = () => {
    onClose();
  };
  const handleSubmit = () => {
    if (onSubmit) onSubmit();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{headline}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          {locale.submit}
        </Button>
        <Button onClick={handleClose} color="primary">
          {locale.cancel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
