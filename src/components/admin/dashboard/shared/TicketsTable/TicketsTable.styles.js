import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

export const themeStyles = {
  overrides: {
    MUIDataTable: {
      root: {
        tableLayout: 'fixed',
      },
    },
    MUIDataTableFilter: {
      root: {
        '& [class*="gridListTile"]': {
          marginTop: '0',
        },
        '& [class*="MuiFormControl-marginNormal"]': {
          margin: '0',
        },
      },
    },
    MUIDataTableHeadCell: {
      root: {
        [breakpoints.up(960)]: {
          '& [class*="sortAction"]': {
            '& [class*="MUIDataTableHeadCell-data"]:not([class*="sortActive"])': {
              position: 'relative',
              '&:after': {
                content: '"↕"',
                fontSize: '1.5rem',
                fontFamily: 'Verdana',
                opacity: '0.3',
                position: 'absolute',
                right: '-1.5rem',
                top: '0',
              },
            },
          },
        },
      },
    },
    MUIDataTableBodyCell: {
      root: {
        '&:hover': {
          cursor: 'pointer',
        },
        '&:first-child[data-colindex]': {
          [breakpoints.up(960)]: {
            width: '30%',
          },
        },
        '&:last-child[data-colindex]': {
          [breakpoints.up(960)]: {
            width: '30%',
          },
        },
        [breakpoints.down(575)]: {
          '& > [class*="stackedCommon"]': {
            fontSize: '1rem',
            wordBreak: 'break-all',
          },
        },
        '& [class*="emptyTitle"]': {
          [breakpoints.down(960)]: {
            textAlign: 'left',
          },
        },
      },
    },
    MUIDataTableToolbar: {
      root: {
        [breakpoints.down(575)]: {
          '& [class*="searchText"]': {
            flex: '1 0',
          },
        },
      },
    },
    MUIDataTableFooter: {
      root: {
        [breakpoints.down(575)]: {
          '& [class*="tableCellContainer"]': {
            padding: '0',
          },
        },
      },
    },
    MUIDataTablePagination: {
      root: {
        [breakpoints.down(575)]: {
          '& [class*="MuiIconButton"]': {
            padding: '6px',
            width: '30px',
          },
        },
      },
    },
  },
};
