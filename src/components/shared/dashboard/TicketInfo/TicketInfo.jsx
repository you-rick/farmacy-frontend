import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  IconButton,
  Grid,
  Box,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './TicketInfo.styles';
import MessageForm from './MessageForm/MessageForm';
import Messages from './Messages/Messages';
import SmallPreloader from '../../common/SmallPreloader/SmallPreloader';

const useStyles = makeStyles((theme) => themeStyles(theme));

const TicketInfo = ({ ticket, open, onClose }) => {
  const classes = useStyles();
  const [msgFormReady, setMsgFormReady] = useState(false);

  const handleClose = () => {
    onClose();
  };
  const handleFormInit = (status) => {
    setMsgFormReady(status);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      classes={{
        scrollPaper: classes.scrollPaper,
        paper: classes.paper,
      }}
    >
      <DialogTitle>
        <Grid container justify="space-between">
          {ticket.subject}
          <IconButton aria-label="close" size="small" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent dividers>
        {!msgFormReady && <SmallPreloader />}
        <Box style={{ visibility: msgFormReady ? 'visible' : 'hidden' }}>
          <MessageForm onFormInit={handleFormInit} />
        </Box>

        {msgFormReady && (
          <>
            <Divider />
            <Messages ticketId={ticket.ticketNumber} />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TicketInfo;
