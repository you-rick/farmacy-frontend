import React, { useEffect } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import { Typography, Grid, Button, Box } from '@material-ui/core';
import RichTextarea from '../../RichTextarea/RichTextarea';
import { LOCALE } from '../../../../../locale';
import { ticketTypes } from '../../../../../core/ticketTypes';

const bodyField = ({ input, meta: { touched, error } }) => (
  <div className={touched && error ? 'bodyFieldError' : ''}>
    <div className="bodyFieldErrorMsg">{touched && error && <span>{error}</span>}</div>
    <input {...input} type="hidden" />
  </div>
);

const MessageForm = ({ onFormInit, handleSubmit, initialize, dispatch, ticket, requestor }) => {
  const editorHeight = 200;
  const locale = LOCALE.user.dashboard.ticketInfo;

  const onEditorChange = (data) => {
    dispatch(change('ticket-message', 'message', data.length ? data : null));
  };
  const handleTextareaInit = (status) => {
    onFormInit(status);
  };

  useEffect(() => {
    initialize({
      ticketNumber: ticket.ticketNumber,
      requestor,
      to: 'ticket.admin@client.com',
      department: 'placeholder',
      component: 'placeholder',
      subject: ticket.subject,
      ticketType: ticketTypes.incident,
      priority: ticket.priority,
      status: ticket.status,

    });
  }, [initialize, requestor, ticket]);

  return (
    <Box m="0 0 1.5rem">
      <Typography variant="subtitle1" color="primary">{locale.messages}</Typography>
      <form onSubmit={handleSubmit}>
        <Box m="1rem 0">
          <Field name="message" type="hidden" component={bodyField} />
          <RichTextarea
            height={editorHeight}
            onChange={onEditorChange}
            onInit={handleTextareaInit}
          />
        </Box>
        <Grid container justify="flex-end">
          <Button color="primary" type="submit" variant="contained">
            {locale.form.submitButton}
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default reduxForm({ form: 'ticket-message' })(MessageForm);
