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
    position: 'absolute',
    top: '38px',
    background: theme.palette.common.white,
    padding: '3px 6px',
    fontSize: '0.85rem',
    boxShadow: '0 0 3px 0 rgba(0,0,0,0.15)',
    width: '100%',
    borderRadius: '4px',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '-6px',
      left: '10px',
      width: '0',
      height: '0',
      borderStyle: 'solid',
      borderWidth: '0 8px 8px 8px',
      borderColor: 'transparent transparent #fff transparent',
    },
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
