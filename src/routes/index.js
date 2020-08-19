// API routes
export const API_LOGIN_ROUTE = 'login';
export const API_USER_GET_TICKETS_ROUTE = 'user/tickets';
export const API_USER_GET_MESSAGES_ROUTE = (userId, ticketId) => `/user/${userId}/ticket/${ticketId}/messages`;

// User routes
export const USER_BASE_ROUTE = '/user';
export const USER_LOGIN_ROUTE = '/user/login';
export const USER_FORGOT_PASS_ROUTE = '/user/forgot-password';
export const USER_TICKETS_ROUTE = '/user/my-tickets';

// Public routes
export const NOT_FOUND_ROUTE = '/404';
