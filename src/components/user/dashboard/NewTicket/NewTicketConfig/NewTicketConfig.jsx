import React, { useState } from 'react';
import { Field } from 'redux-form';
import {
  Box,
  Paper,
  Chip,
  TextField,
  Divider,
  Grid,
  MenuItem,
  InputAdornment,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import {
  renderSelectField,
  renderTextField,
} from '../../../../shared/common/FormControls/FormControls';
import themeStyles from './NewTicketConfig.styles';
import { LOCALE } from '../../../../../locale';
import { ticketType, ticketPriority, department } from '../../../../../core';

const useStyles = makeStyles((theme) => themeStyles(theme));

const typeList = Object.entries(ticketType);
const priorityList = Object.entries(ticketPriority);
const departmentList = Object.entries(department);

const NewTicketConfig = ({ onTagsChange }) => {
  const classes = useStyles();
  const locale = LOCALE.user.dashboard.newTicket.form;
  const [type, setType] = useState(typeList[0][1]);
  const [priority, setPriority] = useState(priorityList[0][1]);
  const [department, setDepartment] = useState(departmentList[0][0]);

  const priorityChange = (event) => {
    setPriority(event.target.value);
  };
  const typeChange = (event) => {
    setType(event.target.value);
  };
  const departmentChange = (event) => {
    setDepartment(event.target.value);
  };
  const tagsChange = (event, values) => {
    onTagsChange(values);
  };

  return (
    <Box className={classes.paperBox}>
      <Paper className={classes.paper}>
        <Field
          label={locale.requester}
          name="requester"
          variant="outlined"
          size="small"
          value="John Doe"
          fullWidth
          className={classes.readonly}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          component={renderTextField}
        />
        <Box m="1rem 0">
          <Field
            select
            name="department"
            label={locale.department}
            variant="outlined"
            size="small"
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
        </Box>
        <Field
          label={locale.component}
          name="component"
          type="text"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          component={renderTextField}
        />
        <Box m="2rem 0">
          <Divider />
        </Box>
        <Box m="0 0 1rem">
          <Autocomplete
            multiple
            options={[]}
            freeSolo
            onChange={tagsChange}
            renderTags={(value, getTagProps) => value.map((option, index) => (
              <Chip
                variant="default"
                size="small"
                label={option}
                {...getTagProps({ index })}
              />
            ))}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                size="small"
                label={locale.tags}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Box>
        <Grid container spacing={2}>
          <Box flexGrow={1} p={1}>
            <Field
              select
              name="ticketType"
              label={locale.type}
              variant="outlined"
              size="small"
              fullWidth
              value={type}
              onChange={typeChange}
              component={renderSelectField}
            >
              {typeList.map((option) => (
                <MenuItem key={option[0]} value={option[1]}>
                  {option[1]}
                </MenuItem>
              ))}
            </Field>
          </Box>
          <Box flexGrow={1} p={1}>
            <Field
              select
              name="priority"
              label={locale.priority}
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
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
};

export default NewTicketConfig;
