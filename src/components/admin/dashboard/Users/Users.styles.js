const themeStyles = (theme) => ({
  tableRow: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  table: {
    whiteSpace: 'nowrap',
  },
  removeBtn: {
    color: theme.palette.error.main,
  },
  headlineWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > *': {
      flexBasis: '33.3%',
      [theme.breakpoints.down(767)]: {
        flexBasis: '50%',
        textAlign: 'left',
      },
    },
  },
});

export default themeStyles;
