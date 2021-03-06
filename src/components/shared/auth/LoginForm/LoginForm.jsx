import React from 'react';
import { Field } from 'redux-form';
import {
  Card,
  CardContent,
  Box,
  Container,
  Button,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { renderTextField, renderCheckbox } from '../../common/FormControls/FormControls';
import {
  USER_LOGIN_ROUTE,
  ADMIN_LOGIN_ROUTE,
  FORGOT_PASSWORD_ROUTE,
} from '../../../../routes';
import { LOCALE } from '../../../../locale';
import { roles } from '../../../../core';

const useStyles = makeStyles({
  root: {
    padding: '1rem',
  },
});

const LoginForm = ({ handleSubmit, userType }) => {
  const classes = useStyles();
  const locale = LOCALE.auth.login;
  const loginPath = userType === 'ROLE_USER' ? ADMIN_LOGIN_ROUTE : USER_LOGIN_ROUTE;
  const loginLabel = userType === 'ROLE_USER' ? locale.adminLogin : locale.userLogin;

  return (
    <Box p="4rem 0">
      <Container maxWidth="xs">
        <Card className={classes.root}>
          <CardContent>
            <Box m="0 0 0.5rem" display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h5" component="h1" align="center" gutterBottom>
                {locale.headline}
              </Typography>
              {
                userType === roles.admin
                && <Box m="0 0 0 0.5rem"><SupervisorAccountIcon color="primary" /></Box>
              }
            </Box>
            <form onSubmit={handleSubmit}>
              <Field
                name="username"
                label={locale.username}
                variant="outlined"
                margin="normal"
                fullWidth
                component={renderTextField}
              />
              <Field
                name="password"
                label={locale.password}
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                component={renderTextField}
              />
              <Field
                name="remember-me"
                component={renderCheckbox}
                label={locale.rememberMe}
              />
              <Box m="1rem 0 0">
                <Button type="submit" fullWidth variant="contained" color="primary">
                  {locale.signIn}
                </Button>
              </Box>
              <Box m="1.5rem 0 0">
                <Grid container justify="center">
                  <Grid item>
                    <Link
                      component={NavLink}
                      to={loginPath}
                      variant="body2"
                    >
                      {loginLabel}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              <Box m="0.5rem 0 0">
                <Grid container justify="center">
                  <Grid item>
                    <Link
                      component={NavLink}
                      to={FORGOT_PASSWORD_ROUTE}
                      variant="body2"
                    >
                      {locale.forgotPassword}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginForm;
