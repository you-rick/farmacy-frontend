import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { connect } from 'react-redux';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import themeStyles, { chartTheme } from './Chart.styles';
import { LOCALE } from '../../../../../../locale';

const useStyles = makeStyles((theme) => themeStyles(theme));

const Chart = ({ type, data, isDataFetching }) => {
  const chartShiftSize = 2;
  const classes = useStyles();
  const theme = useTheme();
  const chartPalette = chartTheme(theme);
  const stats = Object.entries(data)
    .map(([key, value]) => ({
      'title': key,
      'value': value || 0.01,
      'labelValue': value,
      'color': chartPalette[key],
    }));
  const locale = LOCALE.admin.dashboard.stats[type];

  return (
    <Card className={classes.card}>
      <CardHeader title={locale.title} style={{ textAlign: 'center' }} />
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs className={classes.chartWrap}>
            <Box className={classes.chartInnerWrap}>
              <Box className={classes.chart}>
                {!isDataFetching && (
                  <PieChart
                    data={stats}
                    animate
                    radius={PieChart.defaultProps.radius - chartShiftSize}
                    segmentsShift={chartShiftSize}
                    label={({ dataEntry }) => dataEntry.labelValue || '0'}
                    labelStyle={() => ({
                      fontSize: '10px',
                      fontFamily: 'sans-serif',
                      fill: '#fff',
                    })}
                  />
                )}
              </Box>
            </Box>

          </Grid>
          <Grid item xs>
            <Box className={classes.dataBox}>
              <List dense>
                {stats.map((item) => (
                  <ListItem key={item.title} className={classes.listItem}>
                    <ListItemIcon className={classes.listIcon}>
                      <AdjustIcon fontSize="small" style={{ color: chartPalette[item.title] }} />
                    </ListItemIcon>
                    <ListItemText primary={`${locale[item.title]} (${item.labelValue || 0})`} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  isDataFetching: state.app.isDataFetching,
});

export default connect(mapStateToProps, {})(Chart);
