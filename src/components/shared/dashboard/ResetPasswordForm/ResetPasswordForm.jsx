import React, { useEffect } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Box, Button, Card, CardContent, Container, Typography } from '@material-ui/core';
import { renderTextField } from '../../common/FormControls/FormControls';
import { LOCALE } from '../../../../locale';
import validate from './validate';

const ResetPasswordForm = ({ handleSubmit, initialize, email }) => {
  const locale = LOCALE.common.dashboard.resetPassword;

  useEffect(() => {
    initialize({ email });
  }, [initialize, email]);

  return (
    <Container maxWidth="xs" disableGutters>
      <Card>
        <CardContent>
          <Box m="0 0 0.5rem" display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5" component="h1" align="center" gutterBottom>
              {locale.headline}
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Field
              name="oldPassword"
              label={locale.form.oldPassword}
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              component={renderTextField}
            />
            <Field
              name="newPassword"
              label={locale.form.newPassword}
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              component={renderTextField}
            />
            <Field
              name="confirmPassword"
              label={locale.form.confirmPassword}
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
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
  form: 'reset-password',
  validate,
})(ResetPasswordForm);
