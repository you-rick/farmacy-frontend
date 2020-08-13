import * as axios from 'axios';
import { authHeaders } from '../utils/helpers/auth-headers';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const userAPI = {
  login(data) {
    return axiosInstance.post('login', {}, {
      auth: authHeaders(data),
    });
  },
};
