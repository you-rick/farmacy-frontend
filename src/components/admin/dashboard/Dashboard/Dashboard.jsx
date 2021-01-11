import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { useLastLocation } from 'react-router-last-location';
import { getData } from '../../../../store/adminReducer';
import NewTickets from './NewTickets/NewTickets';
import Stats from './Stats/Stats';
import { getNewTickets, getStats } from '../../../../store/adminSelectors';

const Dashboard = memo(({ getData, newTickets, stats }) => {
  const lastLocation = useLastLocation();

  useEffect(() => {
    if (lastLocation) {
      if (lastLocation.pathname !== '/') getData();
    }
  }, [getData, lastLocation]);

  return (
    <>
      <Stats stats={stats} />
      <NewTickets tickets={newTickets} />
    </>
  );
});

const mapStateToProps = (state) => ({
  newTickets: getNewTickets(state),
  stats: getStats(state),
});

export default connect(mapStateToProps, { getData })(Dashboard);
