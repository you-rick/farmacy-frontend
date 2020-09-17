import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

export const themeStyles = {
  overrides: {
    MUIDataTable: {
      root: {
        tableLayout: 'fixed',
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
  },
};
