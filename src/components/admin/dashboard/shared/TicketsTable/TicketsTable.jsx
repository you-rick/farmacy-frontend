import React, { useState } from 'react';
import _ from 'lodash';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Box } from '@material-ui/core';
import moment from 'moment';
import { themeStyles } from './TicketsTable.styles';
import { LOCALE } from '../../../../../locale';
import { DATE_FORMAT } from '../../../../../utils/validators';
import { ticketPriority } from '../../../../../core';

const useStyles = () => createMuiTheme(themeStyles);

const TicketsTable = ({ tickets, onShowModal }) => {
  const locale = LOCALE.common.dashboard.tickets;
  const priorityList = Object.values(ticketPriority);
  const [filterDate, setFilterDate] = useState(null);

  const columns = [
    {
      name: 'ticketNumber',
      label: locale.tableHeaders.ticketNumber,
      options: {
        filter: false,
        sort: false,
        searchable: true,
      },
    },
    {
      name: 'createdDate',
      label: locale.tableHeaders.date,
      options: {
        sort: true,
        searchable: false,
        customBodyRender: (timestamp) => moment(timestamp)
          .format(DATE_FORMAT),
        filter: true,
        filterType: 'custom',
        customFilterListOptions: {
          render: (v) => `${locale.tableHeaders.date} - ${v}`,
          update: (filterList, filterPos, index) => {
            setFilterDate(null);
            filterList[index] = [];
            return filterList;
          },
        },
        filterOptions: {
          fullWidth: true,
          names: [],
          logic: (date, filters) => {
            if (filters.length) {
              return date !== filters[0];
            }
            return false;
          },
          display: (filterList, onChange, index, column) => (
            <Box>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  disableToolbar
                  autoOk
                  variant="inline"
                  format="dd/MM/yyyy"
                  placeholder={DATE_FORMAT}
                  margin="normal"
                  fullWidth
                  label={locale.dateFilter}
                  value={filterList[1][0] ? filterDate : null}
                  onChange={(date) => {
                    setFilterDate(date);
                    filterList[index][0] = moment(date, 'DD/MM/YYYY')
                      .format(DATE_FORMAT);
                    onChange(filterList[index], index, column);
                  }}
                />
              </MuiPickersUtilsProvider>
            </Box>
          ),
        },
      },
    },
    {
      name: 'priority',
      label: locale.tableHeaders.priority,
      options: {
        filter: true,
        filterOptions: {
          fullWidth: true,
        },
        customFilterListOptions: {
          render: (v) => `${locale.tableHeaders.priority} - ${v}`,
        },
        sort: true,
        searchable: false,
        customBodyRender: (number) => priorityList[number],
      },
    },
    {
      name: 'subject',
      label: locale.tableHeaders.subject,
      options: {
        filter: false,
        sort: false,
        searchable: true,
      },
    },
  ];

  const tableData = _.cloneDeep(tickets)
    .map((item) => {
      item.createdDate = moment(item.createdDate)
        .valueOf();
      if (item.priority) {
        const priority = item.priority.toUpperCase();
        item.priority = priorityList.indexOf(priority);
      }

      return item;
    });

  const options = {
    download: false,
    print: false,
    selectableRows: 'none',
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 25, 50],
    sortOrder: {
      name: 'priority',
      direction: 'desc',
    },
    searchPlaceholder: `${locale.tableHeaders.ticketNumber}, ${locale.tableHeaders.subject}`,
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
