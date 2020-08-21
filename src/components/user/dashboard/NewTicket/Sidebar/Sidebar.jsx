import React, { useState } from 'react';
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
import themeStyles from './Sidebar.styles';
import { LOCALE } from '../../../../../locale';

const useStyles = makeStyles((theme) => themeStyles(theme));

const typeList = ['type 1', 'type 2', 'type 3'];
const priorityList = ['normal', 'high', 'low'];
const departmentList = ['Information Technology'];

const Sidebar = () => {
  const classes = useStyles();
  const locale = LOCALE.user.dashboard.newTicket.form;
  const [type, setType] = useState(typeList[0]);
  const [priority, setPriority] = useState(priorityList[0]);
  const [department, setDepartment] = useState(departmentList[0]);

  const priorityChange = (event) => {
    setPriority(event.target.value);
  };
  const typeChange = (event) => {
    setType(event.target.value);
  };
  const departmentChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Box m="1rem 3rem 0 0">
      <Paper className={classes.paper}>
        <TextField
          label={locale.requester}
          variant="outlined"
          size="small"
          value="John Doe"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Box m="1rem 0">
          <TextField
            select
            label={locale.department}
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            value={department}
            onChange={departmentChange}
          >
            {departmentList.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <TextField
          label={locale.component}
          type="text"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box m="2rem 0">
          <Divider />
        </Box>
        <Box m="0 0 1rem">
          <Autocomplete
            multiple
            options={[]}
            freeSolo
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
            <TextField
              select
              label={locale.type}
              variant="outlined"
              size="small"
              fullWidth
              value={type}
              onChange={typeChange}
            >
              {typeList.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box flexGrow={1} p={1}>
            <TextField
              select
              label={locale.priority}
              variant="outlined"
              size="small"
              fullWidth
              value={priority}
              onChange={priorityChange}
            >
              {priorityList.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Sidebar;
