import { createSelector } from 'reselect';

export const getAdminData = (state) => state.admin;

export const getNewTickets = createSelector(getAdminData, (data) => data.activeList);
export const getStats = createSelector(getAdminData, (data) => ({
  openTickets: data.openTickets,
  dueTickets: data.dueTickets,
}));
