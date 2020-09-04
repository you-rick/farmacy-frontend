import React, { useEffect } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './ProfileForm.styles';
import { renderTextField } from '../FormControls/FormControls';
import { PHONE_NUMBER_PATTERN } from '../../../utils/validators/validators';
import { LOCALE } from '../../../locale';
import validate from './validate';

const useStyles = makeStyles((theme) => themeStyles(theme));

const phoneMask = createTextMask({
  pattern: PHONE_NUMBER_PATTERN,
});

const ProfileForm = ({ handleSubmit, initialize, user }) => {
  const classes = useStyles();
  const locale = LOCALE.common.dashboard.profile;

  useEffect(() => {
    initialize({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  }, [initialize, user]);

  return (
    <Container maxWidth="sm" disableGutters>
      <Card className={classes.root}>
        <CardContent>
          <Box m="0 0 0.5rem" display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5" component="h1" align="center" gutterBottom>
              {locale.headline}
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Field
              name="firstName"
              label={locale.form.firstName}
              variant="outlined"
              margin="normal"
              fullWidth
              component={renderTextField}
            />
            <Field
              name="lastName"
              label={locale.form.lastName}
              variant="outlined"
              margin="normal"
              fullWidth
              component={renderTextField}
            />
            <Field
              inputProps={{
                readOnly: true,
                className: classes.readonly,
              }}
              name="email"
              type="email"
              label={locale.form.email}
              variant="outlined"
              margin="normal"
              fullWidth
              component={renderTextField}
            />
            <Grid container>
              <Box className={classes.phoneCol}>
                <Field
                  name="phoneNumber"
                  label={locale.form.phoneNumber}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  {...phoneMask}
                  component={renderTextField}
                />
              </Box>
              <Box className={classes.extCol}>
                <Field
                  name="extension"
                  label={locale.form.extension}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  component={renderTextField}
                />
              </Box>
            </Grid>
            <Field
              name="mobileNumber"
              label={locale.form.mobileNumber}
              variant="outlined"
              margin="normal"
              fullWidth
              {...phoneMask}
              component={renderTextField}
            />
            <Box m="1rem 0 0">
              <Button type="submit" fullWidth variant="contained" color="primary">
                {locale.form.submit}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>

  );
};

export default reduxForm({
  form: 'profile',
  validate,
})(ProfileForm);
