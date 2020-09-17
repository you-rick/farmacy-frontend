import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { createMuiTheme } from '@material-ui/core/styles';

const breakpoints = createBreakpoints({});
const defaultTheme = createMuiTheme();

export const themeStyles = {
  unresolved: {
    backgroundColor: defaultTheme.palette.info.light,
  },
  in_progress: {
    backgroundColor: defaultTheme.palette.warning.light,
  },
  done: {
    backgroundColor: defaultTheme.palette.success.light,
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
  },
};
