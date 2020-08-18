import * as axios from 'axios';
import { authHeaders } from '../utils/helpers/auth-headers';
import {
  API_LOGIN_ROUTE,
  API_USER_GET_TICKETS_ROUTE,
  API_USER_GET_MESSAGES_ROUTE,
} from '../routes';
import { getTokenHeader } from '../utils/helpers/token-handler';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const userAPI = {
  login(data) {
    return axiosInstance.post(API_LOGIN_ROUTE, {}, {
      auth: authHeaders(data),
    });
  },
};

export const ticketsAPI = {
  getTickets() {
    return axiosInstance.get(API_USER_GET_TICKETS_ROUTE, {
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
