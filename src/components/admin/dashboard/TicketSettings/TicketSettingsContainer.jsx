import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTicketSettings, updateTicketSettings } from '../../../../store/adminReducer';
import TicketSettingsForm from './TicketSettingsForm';

const TicketSettingsContainer = ({ getTicketSettings, updateTicketSettings, ticketConfig }) => {
  useEffect(() => {
    getTicketSettings();
  }, [getTicketSettings]);

  const onSubmit = (data) => {
    updateTicketSettings({ ticketDueConfig: data });
  };

  return <TicketSettingsForm onSubmit={onSubmit} ticketConfig={ticketConfig} />;
};

const mapStateToProps = (state) => ({
  ticketConfig: state.admin.ticketDueConfig,
});

export default connect(mapStateToProps, {
  getTicketSettings,
  updateTicketSettings,
})(TicketSettingsContainer);
