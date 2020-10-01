import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { createMuiTheme } from '@material-ui/core/styles';

const breakpoints = createBreakpoints({});
const defaultTheme = createMuiTheme();

export const themeStyles = {
  new: {
    backgroundColor: defaultTheme.palette.info.light,
  },
  open: {
    backgroundColor: defaultTheme.palette.info.light,
  },
  unresolved: {
    backgroundColor: defaultTheme.palette.info.light,
  },
  in_progress: {
    backgroundColor: defaultTheme.palette.warning.light,
  },
  re_open: {
    backgroundColor: defaultTheme.palette.warning.light,
  },
  resolved: {
    backgroundColor: defaultTheme.palette.success.light,
  },
  closed: {
    backgroundColor: defaultTheme.palette.success.light,
  },
  hold: {
    backgroundColor: defaultTheme.palette.warning.light,
  },
  badge: {
    marginRight: '1rem',
  },
};

export const customThemeStyles = {
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
