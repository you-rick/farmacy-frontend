import React, { useState } from 'react';
import _ from 'lodash';
import MUIDataTable from 'mui-datatables';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Badge, Box } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { themeStyles, customThemeStyles } from './TicketsTable.styles';
import { LOCALE } from '../../../../../locale';
import { DATE_FORMAT } from '../../../../../utils/validators';

const useTheme = () => createMuiTheme(customThemeStyles);
const useStyles = makeStyles(() => themeStyles);

const TicketsTable = ({ tickets, onShowModal }) => {
  const classes = useStyles();
  const locale = LOCALE.common.dashboard.tickets;
  const [filterDate, setFilterDate] = useState(null);

  const columns = [
    {
      name: 'ticketNumber',
      label: locale.tableHeaders.ticketNumber,
      options: {
        filter: false,
        sort: false,
        searchable: true,
        customBodyRender: (number) => {
          const ticket = tickets.filter((item) => item.ticketNumber === number)[0];
          return (
            <>
              <Badge
                variant="dot"
                className={classes.badge}
                classes={{ badge: classes[ticket.status.toLowerCase()] }}
              />
              {number}
            </>
          );
        },
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
      // eslint-disable-next-line no-param-reassign
      item.createdDate = moment(item.createdDate, 'DD/MM/YYYY')
        .toDate()
        .getTime();
      return item;
    });

  const options = {
    download: false,
    print: false,
    selectableRows: false,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 25, 50],
    sortOrder: {
      name: 'createdDate',
      direction: 'desc',
    },
    searchPlaceholder: `${locale.tableHeaders.ticketNumber}, ${locale.tableHeaders.subject}`,
    textLabels: {
      body: {
        noMatch: locale.noData,
      },
    },
    onRowClick: (rowData) => {
      const number = rowData[0].props.children[1];
      const ticket = tickets.filter((item) => item.ticketNumber === number)[0];
      onShowModal(ticket);
    },
  };

  return (
    <MuiThemeProvider theme={useTheme()}>
      <MUIDataTable
        data={tableData}
        columns={columns}
        options={options}
      />
    </MuiThemeProvider>
  );
};

export default TicketsTable;
