import * as axios from 'axios';
import { authHeaders } from '../utils/helpers/auth-headers';
import {
  API_USER_DASHBOARD_ROUTE,
  API_USER_GET_MESSAGES_ROUTE,
  API_USER_POST_TICKET_ROUTE,
  API_USER_TICKET_UPDATE_ROUTE,
  API_ADMIN_DASHBOARD_ROUTE,
  API_PROFILE_ROUTE,
  API_ADMIN_TICKET_UPDATE_ROUTE,
  API_ADMIN_GET_MESSAGES_ROUTE,
  API_ADMIN_TICKETS_ROUTE,
  API_ADMIN_GET_USERS_ROUTE,
  API_ADMIN_DELETE_USER_ROUTE,
  API_ADMIN_CREATE_USER_ROUTE,
  API_RESET_PASSWORD_ROUTE,
  API_ADMIN_TICKET_SETTINGS_ROUTE,
  API_FIND_TICKET_ROUTE,
  API_FORGOT_PASSWORD_ROUTE,
} from '../routes';
import { getTokenHeader, getEmail } from '../utils/helpers/token-handler';
import { roles } from '../core';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const tokenHeader = () => ({
  headers: {
    'Authorization': getTokenHeader(),
  },
});

export const authAPI = {
  login(data, role) {
    const url = role === roles.admin ? API_ADMIN_DASHBOARD_ROUTE : API_USER_DASHBOARD_ROUTE;
    return axiosInstance.post(url, { email: data.username }, {
      auth: authHeaders(data),
    });
  },
  forgotPassword(data) {
    return axiosInstance.post(API_FORGOT_PASSWORD_ROUTE, data);
  },
  getProfile(role) {
    const url = role === roles.admin ? API_ADMIN_DASHBOARD_ROUTE : API_USER_DASHBOARD_ROUTE;
    return axiosInstance.post(url, { email: getEmail() }, tokenHeader());
  },
  updateProfile(data) {
    return axiosInstance.post(API_PROFILE_ROUTE, data, tokenHeader());
  },
  resetPassword(data) {
    return axiosInstance.post(API_RESET_PASSWORD_ROUTE, data, tokenHeader());
  },
};

export const adminAPI = {
  getData() {
    return axiosInstance.post(API_ADMIN_DASHBOARD_ROUTE, { email: getEmail() }, tokenHeader());
  },
  getTickets() {
    return axiosInstance.get(API_ADMIN_TICKETS_ROUTE, tokenHeader());
  },
  getTicketSettings() {
    return axiosInstance.get(API_ADMIN_TICKET_SETTINGS_ROUTE, tokenHeader());
  },
  updateTicketSettings(data) {
    return axiosInstance.post(API_ADMIN_TICKET_SETTINGS_ROUTE, data, tokenHeader());
  },
};

export const usersAPI = {
  getUsers() {
    return axiosInstance.get(API_ADMIN_GET_USERS_ROUTE, tokenHeader());
  },
  createUser(data) {
    return axiosInstance.post(API_ADMIN_CREATE_USER_ROUTE, data, tokenHeader());
  },
  deleteUser(id) {
    return axiosInstance.delete(API_ADMIN_DELETE_USER_ROUTE(id), tokenHeader());
  },
};

export const ticketsAPI = {
  getTickets() {
    return axiosInstance.post(API_USER_DASHBOARD_ROUTE, { email: getEmail() }, tokenHeader());
  },
  createTicket(data, userId) {
    return axiosInstance.post(API_USER_POST_TICKET_ROUTE(userId), data, tokenHeader());
  },
  updateTicket(data, ticketId, userId, role) {
    const updateUrl = () => (role === roles.user
      ? API_USER_TICKET_UPDATE_ROUTE(userId, ticketId)
      : API_ADMIN_TICKET_UPDATE_ROUTE(ticketId));
    return axiosInstance.post(updateUrl(), data, tokenHeader());
  },
  findTicket(userId, ticketId) {
    return axiosInstance.get(API_FIND_TICKET_ROUTE, {
      params: {
        userId,
        ticketId,
      },
      headers: {
        'Authorization': getTokenHeader(),
      },
    });
  },
};

export const messagesAPI = {
  getMessages(userId, ticketId, role) {
    const url = role === roles.admin ? API_ADMIN_GET_MESSAGES_ROUTE : API_USER_GET_MESSAGES_ROUTE;
    return axiosInstance.get(url(userId, ticketId), tokenHeader());
  },
};
