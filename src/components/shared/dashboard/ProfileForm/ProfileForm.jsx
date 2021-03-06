import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './ProfileForm.styles';
import { renderTextField } from '../../common/FormControls/FormControls';
import { PHONE_NUMBER_PATTERN } from '../../../../utils/validators';
import { USER_RESET_PASSWORD_ROUTE, ADMIN_RESET_PASSWORD_ROUTE } from '../../../../routes';
import { LOCALE } from '../../../../locale';
import validate from './validate';

const useStyles = makeStyles((theme) => themeStyles(theme));

const phoneMask = createTextMask({
  pattern: PHONE_NUMBER_PATTERN,
});

export const ProfileFormInner = ({ handleSubmit, initialize, user }) => {
  const classes = useStyles();
  const locale = LOCALE.common.dashboard.profile;
  const resetPassPath = user.role === 'ROLE_USER' ? USER_RESET_PASSWORD_ROUTE : ADMIN_RESET_PASSWORD_ROUTE;

  useEffect(() => {
    const { firstName, lastName, email, phoneNumber, extension, mobileNumber } = user;
    initialize({
      firstName,
      lastName,
      email,
      phoneNumber,
      extension,
      mobileNumber,
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
            <Box m="1rem 0 0">
              <Grid container justify="center">
                <Grid item>
                  <Link
                    component={NavLink}
                    to={resetPassPath}
                    variant="body2"
                    data-test-id="resetPasswordLink"
                  >
                    {locale.resetPassword}
                  </Link>
                </Grid>
              </Grid>
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
})(ProfileFormInner);
