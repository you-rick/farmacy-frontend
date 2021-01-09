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
    <Dialog open={open} onClose={handleClose} data-test-id="ConfirmModalComponent">
      <DialogTitle data-test-id="ModalHeadline">{headline}</DialogTitle>
      <DialogContent>
        <DialogContentText data-test-id="ModalBody">
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary" data-test-id="SubmitButton">
          {locale.submit}
        </Button>
        <Button onClick={handleClose} color="primary" data-test-id="CancelButton">
          {locale.cancel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
