import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './Users.styles';
import { getUsers } from '../../../../store/usersReducer';
import { LOCALE } from '../../../../locale';

const useStyles = makeStyles((theme) => themeStyles(theme));

const Users = ({ users, getUsers }) => {
  const classes = useStyles();
  const locale = LOCALE.common.dashboard.users;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <Box m="0 0 2rem">
        <Typography variant="h5" component="h1" align="center">
          {locale.headline}
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>{locale.tableHeaders.name}</TableCell>
              <TableCell>{locale.tableHeaders.email}</TableCell>
              <TableCell>{locale.tableHeaders.department}</TableCell>
              <TableCell>{locale.tableHeaders.role}</TableCell>
              <TableCell>{locale.tableHeaders.createdAt}</TableCell>
              <TableCell>{locale.tableHeaders.action}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow hover key={item.userId} className={classes.tableRow}>
                <TableCell>{`${item.firstName} ${item.lastName}`}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>
                  <Moment format="DD/MM/YYYY">{item.employedSince}</Moment>
                </TableCell>
                <TableCell>
                  <IconButton aria-label="delete" className={classes.removeBtn}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box m="2rem 0 0">
        <Grid container justify="flex-end">
          <Button variant="contained" color="primary">Create User</Button>
        </Grid>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.list,
});
export default connect(mapStateToProps, { getUsers })(Users);
