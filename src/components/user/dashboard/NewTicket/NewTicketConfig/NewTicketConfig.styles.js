const themeStyles = (theme) => ({
  paperBox: {
    margin: '1rem 3rem 0 0',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
    },
  },
  readonly: {
    '& input': {
      cursor: 'not-allowed',
    },
  },
  paper: {
    width: '22rem',
    height: `${570 / 16}rem`,
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '100%',
    },
  },
  profileLabel: {
    width: '100%',
    justifyContent: 'flex-start',
  },
});

export default themeStyles;
