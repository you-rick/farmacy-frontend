import React from 'react';
import { Dialog, DialogTitle, DialogContent, Divider, IconButton, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './TicketInfo.styles';
import MessageForm from './MessageForm/MessageForm';
import Messages from './Messages/Messages';

const useStyles = makeStyles((theme) => themeStyles(theme));

const TicketInfo = ({ ticket, open, onClose }) => {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      classes={{ scrollPaper: classes.scrollPaper, paper: classes.paper }}
    >
      <DialogTitle>
        <Grid container justify="space-between">
          Ticket Title Placeholder
          <IconButton aria-label="close" size="small" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent dividers>
        <MessageForm />
        <Divider />
        <Messages ticketId={ticket.ticketNumber} />
      </DialogContent>
    </Dialog>
  );
};

export default TicketInfo;
