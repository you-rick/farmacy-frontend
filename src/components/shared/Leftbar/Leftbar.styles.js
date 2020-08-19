const themeStyles = (theme) => ({
  drawer: {
    width: '15rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  icon: {
    color: theme.palette.common.white,
  },
  listIcon: {
    minWidth: '40px',
  },
  divider: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  link: {
    color: theme.palette.common.white,
    '&.active': {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
});

export default themeStyles;
