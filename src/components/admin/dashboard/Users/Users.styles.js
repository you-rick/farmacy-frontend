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
});

export default themeStyles;
