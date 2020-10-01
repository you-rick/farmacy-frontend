import React, { useState } from 'react';
import moment from 'moment';
import { Box, Button, Card, CardContent, Container, MenuItem, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { reduxForm, Field, change } from 'redux-form';
import { renderSelectField, renderTextField } from '../../../shared/common/FormControls/FormControls';
import { DATE_FORMAT } from '../../../../utils/validators';
import { LOCALE } from '../../../../locale';
import validate from './validate';
import { roles, department } from '../../../../core';

const departmentList = Object.entries(department);
const roleTypes = [
  {
    type: roles.user,
    title: LOCALE.roles.user,
  },
  {
    type: roles.admin,
    title: LOCALE.roles.admin,
  },
];
const useStyles = makeStyles({
  root: {
    padding: '0 0.5rem 0.5rem',
  },
});

const NewUser = ({ handleSubmit, dispatch }) => {
  const classes = useStyles();
  const locale = LOCALE.admin.dashboard.createUser;
  const [department, setDepartment] = useState(departmentList[0][0]);
  const [role, setRole] = useState(roleTypes[0].type);
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    const formattedDate = moment(date, 'DD/MM/YYYY').format(DATE_FORMAT);
    dispatch(change('new-user', 'employedSince', formattedDate));
    setSelectedDate(date);
  };

  const departmentChange = (event) => {
    setDepartment(event.target.value);
  };
  const roleChange = (event) => {
    setRole(event.target.value);
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
                <MenuItem key={option[0]} value={option[0]}>
                  {option[1]}
                </MenuItem>
              ))}
            </Field>
            <Field
              select
              name="role"
              label={locale.form.role}
              variant="outlined"
              fullWidth
              margin="normal"
              value={role}
              onChange={roleChange}
              component={renderSelectField}
            >
              {roleTypes.map((option) => (
                <MenuItem key={option.type} value={option.type}>
                  {option.title}
                </MenuItem>
              ))}
            </Field>
            <Box>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  disableToolbar
                  autoOk
                  variant="inline"
                  format="dd/MM/yyyy"
                  placeholder={DATE_FORMAT}
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
