import React, { useEffect } from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Box,
  Container,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody, Button,
} from '@material-ui/core';
import { renderTextField } from '../../../shared/common/FormControls/FormControls';
import { LOCALE } from '../../../../locale';
import validate from './validate';

const TicketSettingsForm = ({ handleSubmit, initialize, ticketConfig }) => {
  const locale = LOCALE.admin.dashboard.ticketSettings;
  const configList = Object.entries(ticketConfig);
  const parseNumber = (val) => (Number.isNaN(parseInt(val, 10)) ? val : parseInt(val, 10));

  useEffect(() => {
    initialize({ ...ticketConfig });
  }, [initialize, ticketConfig]);

  return (
    <Container maxWidth="xs" disableGutters>
      <Box m="0 0 0.5rem" display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          {locale.headline}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TableContainer component={Paper}>
          <Table>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '50%' }} />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell align="center">{locale.tableHeaders.type}</TableCell>
                <TableCell align="center">{locale.tableHeaders.overdue}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {configList.map((item) => (
                <TableRow key={item[0]}>
                  <TableCell align="center">
                    <Typography style={{ textTransform: 'capitalize' }}>{item[0]}</Typography>
                  </TableCell>
                  <TableCell>
                    <Field
                      name={item[0]}
                      size="small"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      parse={(val) => parseNumber(val)}
                      component={renderTextField}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box m="1rem 0 0">
          <Button type="submit" fullWidth variant="contained" color="primary">
            {locale.form.submit}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default reduxForm({
  form: 'ticket-settings',
  validate,
})(TicketSettingsForm);
