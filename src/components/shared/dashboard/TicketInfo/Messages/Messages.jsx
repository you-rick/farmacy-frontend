import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Divider, Typography } from '@material-ui/core';
import Message from '../Message/Message';
import SmallPreloader from '../../../common/SmallPreloader/SmallPreloader';
import { getTicketInfo } from '../../../../../store/ticketInfoReducer';
import { LOCALE } from '../../../../../locale';

const Messages = ({ messages, isDataFetching }) => {
  const locale = LOCALE.user.dashboard.ticketInfo;
  const [showLoader, setShowLoader] = useState(!messages.length && isDataFetching);

  useEffect(() => {
    setShowLoader(!messages.length && isDataFetching);
  }, [messages, isDataFetching]);

  if (showLoader) return <SmallPreloader />;

  return (
    <>
      {!!messages.length
      && (
        <>
          <Divider />
          <Box m="1rem 0 0" minHeight="5rem">
            <Typography variant="subtitle1" color="primary">{locale.conversions}</Typography>
            {messages.sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateB - dateA;
            })
              .filter((msg) => msg.detailMessage)
              .map((msg) => <Message key={msg.id} message={msg} />)}
          </Box>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  messages: state.ticketInfo.messages,
  isDataFetching: state.app.isDataFetching,
});

export default connect(mapStateToProps, { getTicketInfo })(Messages);
