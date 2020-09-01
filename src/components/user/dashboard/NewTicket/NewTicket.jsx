import React, { useEffect } from 'react';
import { reduxForm, change } from 'redux-form';
import { Box, Typography, Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as uuid from 'uuid';
import { LOCALE } from '../../../../locale';
import NewTicketForm from './NewTicketForm/NewTicketForm';
import NewTicketConfig from './NewTicketConfig/NewTicketConfig';
import validate from './validate';
import themeStyles from './NewTicket.styles';

const useStyles = makeStyles((theme) => themeStyles(theme));

const NewTicket = ({ dispatch, handleSubmit, initialize, user }) => {
  const classes = useStyles();
  const locale = LOCALE.user.dashboard.newTicket;

  const onEditorChange = (data) => {
    dispatch(change('new-ticket', 'issue', data.length ? data : null));
  };
  const onTagsChange = (values) => {
    dispatch(change('new-ticket', 'tags', values.length ? values : []));
  };

  useEffect(() => {
    initialize({
      requester: `${user.firstName} ${user.lastName}`,
      ticketId: uuid.v4(),
    });
  }, [initialize, user]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h5" component="h1" align="center">
        {locale.headline}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box className={classes.ticketBox}>
          <Box className={classes.ticketConfig}>
            <NewTicketConfig onTagsChange={onTagsChange} />
          </Box>
          <Box className={classes.ticketForm}>
            <NewTicketForm onEditorChange={onEditorChange} />
          </Box>
        </Box>
        <Grid container justify="flex-end">
          <Button color="primary" type="submit" variant="contained">
            {locale.form.submitButton}
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default reduxForm({
  form: 'new-ticket',
  validate,
})(NewTicket);
