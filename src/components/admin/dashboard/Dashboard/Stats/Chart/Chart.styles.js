export const chartTheme = (theme) => ({
  'new': theme.palette.info.main,
  'overdue': theme.palette.primary.main,
  'dueNextWeek': theme.palette.warning.main,
  'dueTomorrow': theme.palette.error.light,
  'dueToday': theme.palette.error.dark,
});

const themeStyles = (theme) => ({
  listItem: {
    // whiteSpace: 'nowrap',
  },
  listIcon: {
    minWidth: '2rem',
  },
  card: {
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  },
  dataBox: {
    marginLeft: '1rem',
    [theme.breakpoints.down(600)]: {
      marginLeft: '0',
    },
  },
  chartWrap: {
    maxWidth: '24rem',
    [theme.breakpoints.between(600, 960)]: {
      flexBasis: '38%',
      flexGrow: '0',
    },
    [theme.breakpoints.down(600)]: {
      flexBasis: '35%',
      flexGrow: '0',
    },
  },
});

export default themeStyles;
