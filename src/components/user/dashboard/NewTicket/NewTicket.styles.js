const themeStyles = (theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  ticketBox: {
    display: 'flex',
    flexWrap: 'nowrap',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  ticketConfig: {
    [theme.breakpoints.down('sm')]: {
      flexGrow: '1',
      order: '2',
      marginBottom: '2rem',
    },
  },
  ticketForm: {
    flexGrow: '1',
    [theme.breakpoints.down('sm')]: {
      order: '1',
    },
  },
});

export default themeStyles;
