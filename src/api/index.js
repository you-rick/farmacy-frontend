import * as axios from 'axios';
import { authHeaders } from '../utils/helpers/auth-headers';
import {
  API_USER_DASHBOARD_ROUTE,
  API_USER_GET_MESSAGES_ROUTE,
  API_USER_POST_TICKET_ROUTE,
  API_ADMIN_DASHBOARD_ROUTE,
  API_PROFILE_ROUTE,
  API_ADMIN_NEW_TICKET_UPDATE_ROUTE,
} from '../routes';
import { getTokenHeader } from '../utils/helpers/token-handler';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const authAPI = {
  login(data, role) {
    const url = role === 'admin' ? API_ADMIN_DASHBOARD_ROUTE : API_USER_DASHBOARD_ROUTE;
    return axiosInstance.post(url, {}, {
      auth: authHeaders(data),
    });
  },
  profile() {
    return axiosInstance.get(API_PROFILE_ROUTE, {
      headers: {
        'Authorization': getTokenHeader(),
      },
    });
  },
};

export const adminAPI = {
  getData() {
    return axiosInstance.post(API_ADMIN_DASHBOARD_ROUTE, {}, {
      headers: {
        'Authorization': getTokenHeader(),
      },
    });
  },
  updateTicketStatus(data, ticketId) {
    return axiosInstance.post(API_ADMIN_NEW_TICKET_UPDATE_ROUTE(ticketId), data, {
      headers: {
        'Authorization': getTokenHeader(),
      },
    });
  },
};

export const ticketsAPI = {
  getTickets() {
    return axiosInstance.post(API_USER_DASHBOARD_ROUTE, {}, {
      headers: {
        'Authorization': getTokenHeader(),
      },
    });
  },
  createTicket(data, userId) {
    return axiosInstance.post(API_USER_POST_TICKET_ROUTE(userId), data, {
      headers: {
        'Authorization': getTokenHeader(),
      },
    });
  },
};

export const messagesAPI = {
  getMessages(userId, ticketId) {
    return axiosInstance.get(API_USER_GET_MESSAGES_ROUTE(userId, ticketId), {
      headers: {
        'Authorization': getTokenHeader(),
      },
    });
  },
};
