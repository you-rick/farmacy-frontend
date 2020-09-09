import React, { useState, useEffect } from 'react';
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
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './Users.styles';
import ConfirmModal from '../../../shared/ConfirmModal/ConfirmModal';
import { getUsers, deleteUser } from '../../../../store/usersReducer';
import { ADMIN_CREATE_USER_ROUTE } from '../../../../routes';
import { LOCALE } from '../../../../locale';

const useStyles = makeStyles((theme) => themeStyles(theme));

const Users = ({ users, getUsers, deleteUser }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeUserId, setActiveUserId] = useState(null);
  const locale = LOCALE.common.dashboard.users;
  const confirmLocale = LOCALE.common.confirmModal.deleteUser;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleShowModal = (id) => {
    setActiveUserId(id);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setActiveUserId(null);
    setModalOpen(false);
  };
  const handleDeleteUser = () => {
    if (activeUserId) {
      deleteUser(activeUserId);
    }
    setModalOpen(false);
    setActiveUserId(null);
  };

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
            {users.map((user) => (
              <TableRow hover key={user.userId} className={classes.tableRow}>
                <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Moment parse="DD/MM/YYYY" format="DD/MM/YYYY">{user.employedSince}</Moment>
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    className={classes.removeBtn}
                    onClick={() => handleShowModal(user.userId)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmModal
        headline={confirmLocale.headline}
        body={confirmLocale.body}
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleDeleteUser}
      />
      <Box m="2rem 0 0">
        <Grid container justify="flex-end">
          <Button
            variant="contained"
            color="primary"
            component={NavLink}
            to={ADMIN_CREATE_USER_ROUTE}
          >
            Create User
          </Button>
        </Grid>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.list,
});
export default connect(mapStateToProps, {
  getUsers,
  deleteUser,
})(Users);
