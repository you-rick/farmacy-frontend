import React, { useEffect } from 'react';
import { reduxForm, change } from 'redux-form';
import { Box, Typography, Container, Grid, Button } from '@material-ui/core';
import * as uuid from 'uuid';
import { LOCALE } from '../../../../locale';
import NewTicketForm from './NewTicketForm/NewTicketForm';
import NewTicketConfig from './NewTicketConfig/NewTicketConfig';
import validate from './validate';

const NewTicket = ({ dispatch, handleSubmit }) => {
  const locale = LOCALE.user.dashboard.newTicket;

  const onEditorChange = (data) => {
    dispatch(change('new-ticket', 'issue', data.length ? data : null));
  };
  const onTagsChange = (values) => {
    dispatch(change('new-ticket', 'tags', values.length ? values : []));
  };

  useEffect(() => {
    dispatch(change('new-ticket', 'requester', 'John Doe'));
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" component="h1" align="center">
        {locale.headline}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexWrap="nowrap" m="1rem 0 0">
          <NewTicketConfig onTagsChange={onTagsChange} />
          <Box flexGrow={1}>
            <NewTicketForm onEditorChange={onEditorChange} />
            <Grid container justify="flex-end">
              <Button color="primary" type="submit" variant="contained">
                {locale.form.submitButton}
              </Button>
            </Grid>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default reduxForm({
  form: 'new-ticket',
  validate,
  initialValues: {
    ticketId: uuid.v4(),
  },
})(NewTicket);
