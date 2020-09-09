import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLastLocation } from 'react-router-last-location';
import { getData } from '../../../../store/adminReducer';
import NewTickets from './NewTickets/NewTickets';
import Stats from './Stats/Stats';

const Dashboard = ({ getData, tickets, stats }) => {
  const lastLocation = useLastLocation();

  useEffect(() => {
    if (lastLocation) {
      if (lastLocation.pathname !== '/') getData();
    }
  }, [getData, lastLocation]);

  return (
    <>
      <Stats stats={stats} />
      <NewTickets tickets={tickets} />
    </>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.admin.newTickets,
  stats: state.admin.stats,
});

export default connect(mapStateToProps, { getData })(Dashboard);
