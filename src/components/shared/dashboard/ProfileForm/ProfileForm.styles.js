const themeStyles = (theme) => ({
  root: {
    padding: '0 0.5rem 0.5rem',
  },
  readonly: {
    cursor: 'not-allowed',
  },
  phoneCol: {
    flexGrow: '1',
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down(767)]: {
      paddingRight: '0',
    },
  },
  extCol: {
    flexGrow: '1',
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down(767)]: {
      paddingLeft: '0',
    },
  },
});

export default themeStyles;
