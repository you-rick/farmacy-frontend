import React, { useState } from 'react';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { reduxForm, Field, change } from 'redux-form';
import { renderSelectField, renderTextField } from '../../../shared/FormControls/FormControls';
import { LOCALE } from '../../../../locale';
import validate from './validate';

const departmentList = ['Information Technology'];
const useStyles = makeStyles({
  root: {
    padding: '0 0.5rem 0.5rem',
  },
});

const NewUser = ({ handleSubmit, dispatch }) => {
  const classes = useStyles();
  const locale = LOCALE.admin.dashboard.createUser;
  const [department, setDepartment] = useState(departmentList[0]);
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    const formattedDate = moment(date, 'DD/MM/YYYY').format('MM/DD/YYYY');
    setSelectedDate(date);
    dispatch(change('new-user', 'employedSince', formattedDate));
  };

  const departmentChange = (event) => {
    setDepartment(event.target.value);
  };

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
              name="email"
              type="email"
              label={locale.form.email}
              variant="outlined"
              margin="normal"
              fullWidth
              component={renderTextField}
            />
            <Field
              select
              name="department"
              label={locale.form.department}
              variant="outlined"
              fullWidth
              margin="normal"
              value={department}
              onChange={departmentChange}
              component={renderSelectField}
            >
              {departmentList.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Field>
            <Field
              name="role"
              label={locale.form.role}
              variant="outlined"
              margin="normal"
              fullWidth
              component={renderTextField}
            />
            <Box>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  disableToolbar
                  autoOk
                  variant="inline"
                  format="MM/dd/yyyy"
                  placeholder="MM/DD/YYYY"
                  margin="normal"
                  inputVariant="outlined"
                  fullWidth
                  label={locale.form.employedSince}
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </Box>

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
  form: 'new-user',
  validate,
})(NewUser);
