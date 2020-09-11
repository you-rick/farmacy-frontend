import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { findTicket } from '../../../../../store/ticketsReducer';

const SearchFormContainer = ({ userId, findTicket }) => {
  const onSubmit = (data) => {
    if (data.ticketId) {
      findTicket(userId, data.ticketId);
    }
  };
  return (
    <SearchForm onSubmit={onSubmit} />
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
});

export default connect(mapStateToProps, { findTicket })(SearchFormContainer);
