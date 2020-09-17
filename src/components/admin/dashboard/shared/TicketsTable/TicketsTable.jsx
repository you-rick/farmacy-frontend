import React from 'react';
import _ from 'lodash';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import moment from 'moment';
import { themeStyles } from './TicketsTable.styles';
import { LOCALE } from '../../../../../locale';
import { DATE_FORMAT } from '../../../../../utils/validators';

const useStyles = () => createMuiTheme(themeStyles);

const TicketsTable = ({ tickets, onShowModal }) => {
  const locale = LOCALE.common.dashboard.tickets;
  const columns = [
    {
      name: 'ticketNumber',
      label: locale.tableHeaders.ticketNumber,
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'createdDate',
      label: locale.tableHeaders.date,
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'priority',
      label: locale.tableHeaders.priority,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'subject',
      label: locale.tableHeaders.subject,
      options: {
        filter: false,
        sort: false,
      },
    },
  ];

  const tableData = _.cloneDeep(tickets)
    .map((item) => {
      // eslint-disable-next-line no-param-reassign
      item.createdDate = moment(item.createdDate, 'DD/MM/YYYY')
        .format(DATE_FORMAT);
      return item;
    });

  const options = {
    download: false,
    print: false,
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 25, 50],
    textLabels: {
      body: {
        noMatch: locale.noData,
      },
    },
    onRowClick: (rowData) => {
      const ticket = tickets.filter((item) => item.ticketNumber === rowData[0])[0];
      onShowModal(ticket);
    },
  };

  return (
    <MuiThemeProvider theme={useStyles()}>
      <MUIDataTable
        data={tableData}
        columns={columns}
        options={options}
      />
    </MuiThemeProvider>
  );
};

export default TicketsTable;
