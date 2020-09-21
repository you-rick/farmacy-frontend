import React, { useEffect, useState } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import { Typography, Grid, Button, Box, MenuItem } from '@material-ui/core';
import RichTextarea from '../../RichTextarea/RichTextarea';
import { LOCALE } from '../../../../../locale';
import { ticketPriority, ticketStatus } from '../../../../../core';
import { renderSelectField } from '../../../common/FormControls/FormControls';
import styles from './MessageForm.module.scss';

const bodyField = ({ input, meta: { touched, error } }) => (
  <div className={touched && error ? 'bodyFieldError' : ''}>
    <div className="bodyFieldErrorMsg">{touched && error && <span>{error}</span>}</div>
    <input {...input} type="hidden" />
  </div>
);

const statusList = Object.entries(ticketStatus);
const priorityList = Object.entries(ticketPriority);

const MessageForm = ({ onFormInit, handleSubmit, initialize, dispatch, ticket, requestor }) => {
  const editorHeight = 200;
  const locale = LOCALE.user.dashboard.ticketInfo;
  const [priority, setPriority] = useState(null);
  const [status, setStatus] = useState(null);

  const priorityChange = (event) => {
    setPriority(event.target.value);
  };
  const statusChange = (event) => {
    setStatus(event.target.value);
  };
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
      component: 'placeholder',
      department: 'placeholder',
      subject: ticket.subject,
      ticketType: ticket.ticketType,
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
        <Grid container justify="space-between">
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Field
                  select
                  name="status"
                  label={locale.form.status}
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={status}
                  onChange={statusChange}
                  component={renderSelectField}
                >
                  {statusList.map((option) => (
                    <MenuItem key={option[0]} value={option[1]}>
                      {option[1]}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field
                  select
                  name="priority"
                  label={locale.form.priority}
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={priority}
                  onChange={priorityChange}
                  component={renderSelectField}
                >
                  {priorityList.map((option) => (
                    <MenuItem key={option[0]} value={option[1]}>
                      {option[1]}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justify="flex-end" className={styles.submitWrap}>
              <Button color="primary" type="submit" variant="contained">
                {locale.form.submitButton}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default reduxForm({ form: 'ticket-message' })(MessageForm);
