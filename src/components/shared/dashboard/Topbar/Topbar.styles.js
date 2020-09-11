import { fade } from '@material-ui/core';

const themeStyles = (theme) => ({
  toolbar: {
    minHeight: '4rem',
  },
  rightPanel: {
    flexWrap: 'nowrap',
  },
  search: {
    position: 'relative',
    margin: '0 0.5rem',
    width: '100%',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    width: '10.5rem',
    fontSize: '0.85rem',
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '11rem',
      '&:focus': {
        width: '13rem',
      },
    },
  },
  subTitle: {
    display: 'none',
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem',
    },
  },
  helpBtn: {
    color: fade(theme.palette.common.black, 0.5),
    [theme.breakpoints.down('sm')]: {
      padding: '0.75rem',
    },
  },
});

export default themeStyles;
