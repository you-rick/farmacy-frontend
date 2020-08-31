import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './Stats.styles';
import Chart from './Chart/Chart';

const useStyles = makeStyles((theme) => themeStyles(theme));

const Stats = ({ stats }) => {
  const { OpenTickets, TicketsDue } = stats;
  const classes = useStyles();

  return (
    <Box m="0 0 3rem">
      <Grid container spacing={2} className={classes.chartContainer}>
        <Grid item sm>
          <Chart type="OpenTickets" data={OpenTickets} />
        </Grid>
        <Grid item sm>
          <Chart type="TicketsDue" data={TicketsDue} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Stats;
