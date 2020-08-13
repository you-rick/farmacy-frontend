import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Box,
  Badge,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '1rem',
  },
  open: {
    backgroundColor: theme.palette.info.light,
  },
  progress: {
    backgroundColor: theme.palette.warning.light,
  },
  done: {
    backgroundColor: theme.palette.success.light,
  },
}));

const MyTickets = () => {
  const classes = useStyles();
  const statusList = ['open', 'progress', 'done'];
  const createData = (id, date, issue, status) => ({
    id,
    date,
    issue,
    status,
  });

  const handleClick = () => {
    console.log('clicked');
  };

  const rows = [
    createData(38765872658, '20/05/20', 'Unable to join wifi', statusList[0]),
    createData(43436582344, '20/05/20', 'Unable to load software', statusList[1]),
    createData(89234987231, '21/05/20', 'Please issue me a new laptop', statusList[2]),
    createData(43433434010, '21/05/20', 'Login issue', statusList[1]),
    createData(89230897531, '21/05/20', 'Expired card issue', statusList[0]),
  ];
  return (
    <>
      <Box m="0 0 2rem">
        <Typography variant="h5" component="h1" align="center">
          My Tickets
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticket Number</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Issue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover key={row.id} onClick={() => handleClick(row.id)}>
                <TableCell>
                  <Badge
                    variant="dot"
                    className={classes.root}
                    classes={{ badge: classes[row.status] }}
                  />
                  {row.id}
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.issue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyTickets;
