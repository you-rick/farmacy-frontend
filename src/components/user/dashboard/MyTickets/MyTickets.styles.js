const themeStyles = (theme) => ({
  root: {
    marginRight: '1rem',
  },
  unresolved: {
    backgroundColor: theme.palette.info.light,
  },
  in_progress: {
    backgroundColor: theme.palette.warning.light,
  },
  done: {
    backgroundColor: theme.palette.success.light,
  },
});

export default themeStyles;
