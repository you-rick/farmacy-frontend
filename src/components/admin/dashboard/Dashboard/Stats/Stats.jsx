import React, { memo } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './Stats.styles';
import Chart from './Chart/Chart';

const useStyles = makeStyles((theme) => themeStyles(theme));

const Stats = memo(({ stats }) => {
  const { openTickets, dueTickets } = stats;
  const classes = useStyles();

  return (
    <Box m="0 0 3rem">
      <Grid container spacing={2} className={classes.chartContainer}>
        <Grid item xs={12} sm>
          <Chart type="openTickets" data={openTickets} />
        </Grid>
        <Grid item xs={12} sm>
          <Chart type="dueTickets" data={dueTickets} />
        </Grid>
      </Grid>
    </Box>
  );
});

export default Stats;
