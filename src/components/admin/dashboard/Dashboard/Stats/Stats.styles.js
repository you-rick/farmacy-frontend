const themeStyles = (theme) => ({
  chartContainer: {
    alignItems: 'center',
    [theme.breakpoints.between(768, 960)]: {
      height: '32vw',
      alignItems: 'stretch',
    },
  },
});

export default themeStyles;
