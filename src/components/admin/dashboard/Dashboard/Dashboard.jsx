import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLastLocation } from 'react-router-last-location';
import { getData } from '../../../../store/adminReducer';
import NewTickets from './NewTickets/NewTickets';
import Stats from './Stats/Stats';

const Dashboard = ({ getData, newTickets, stats }) => {
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
};

const mapStateToProps = (state) => ({
  newTickets: state.admin.activeList,
  stats: {
    openTickets: state.admin.openTickets,
    dueTickets: state.admin.dueTickets,
  },
});

export default connect(mapStateToProps, { getData })(Dashboard);
