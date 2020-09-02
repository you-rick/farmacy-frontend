const themeStyles = (theme) => ({
  low: {
    color: theme.palette.info.main,
  },
  normal: {
    color: theme.palette.primary.main,
  },
  high: {
    color: theme.palette.warning.dark,
  },
  critical: {
    color: theme.palette.error.dark,
  },
  tableRow: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  table: {
    whiteSpace: 'nowrap',
  },
  subjectCol: {
    whiteSpace: 'normal',
    minWidth: '10rem',
  },
});

export default themeStyles;
