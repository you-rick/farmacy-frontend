import React from 'react';
import NewTicket from './NewTicket';

const NewTicketContainer = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return <NewTicket onSubmit={onSubmit} />;
};

export default NewTicketContainer;
