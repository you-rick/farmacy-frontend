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
    border: '1px solid',
    borderColor: fade(theme.palette.common.black, 0.15),
    borderRadius: theme.shape.borderRadius,
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    left: '0.5rem',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    width: '8rem',
    paddingLeft: '2.5rem',
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '8rem',
      '&:focus': {
        width: '12rem',
      },
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
