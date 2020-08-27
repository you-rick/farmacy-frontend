const themeStyles = (theme) => ({
  drawer: {
    width: '15rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  companyWrap: {
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
  },
  accordion: {
    backgroundColor: 'transparent',
    color: '#fff',
    boxShadow: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.5)',
    '&.Mui-expanded': {
      margin: '0',
    },
  },
  accordionDetails: {
    paddingTop: '0',
  },
  company: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  toggleBtn: {
    zIndex: '1102',
    margin: '0.45rem',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  icon: {
    color: theme.palette.common.white,
  },
  listIcon: {
    minWidth: '40px',
  },
  closeIcon: {
    minWidth: '0',
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
