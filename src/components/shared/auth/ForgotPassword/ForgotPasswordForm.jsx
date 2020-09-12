import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../../common/FormControls/FormControls';
import { LOCALE } from '../../../../locale';
import validate from './validate';

const ForgotPasswordForm = ({ handleSubmit }) => {
  const locale = LOCALE.public.forgotPassword;

  return (
    <Box p="4rem 0">
      <Container maxWidth="xs">
        <Card>
          <CardContent>
            <Box m="0 0 0.5rem" display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h5" component="h1" align="center" gutterBottom>
                {locale.headline}
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Field
                name="email"
                label={locale.form.email}
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
    </Box>
  );
};

export default reduxForm({ form: 'forgot-password', validate })(ForgotPasswordForm);
