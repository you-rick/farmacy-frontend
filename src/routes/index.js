// API routes
export const API_USER_DASHBOARD_ROUTE = 'user/dashboard';
export const API_PROFILE_ROUTE = 'profile';
export const API_USER_GET_TICKETS_ROUTE = 'user/tickets';
export const API_USER_GET_MESSAGES_ROUTE = (userId, ticketId) => `/user/${userId}/ticket/${ticketId}/messages`;
export const API_USER_POST_TICKET_ROUTE = (userId) => `/user/${userId}/create-ticket`;

// User routes
export const USER_BASE_ROUTE = '/user';
export const USER_LOGIN_ROUTE = '/user/login';
export const USER_FORGOT_PASS_ROUTE = '/user/forgot-password';
export const USER_PROFILE_ROUTE = '/user/profile';
export const USER_TICKETS_ROUTE = '/user/my-tickets';
export const USER_NEW_TICKET_ROUTE = '/user/create-tickets';

// User route params
export const USER_TICKETS_UNRESOLVED_PARAM = 'unresolved';
export const USER_TICKETS_UPDATED_PARAM = 'updated';
export const USER_TICKETS_SOLVED_PARAM = 'solved';

// Public routes
export const NOT_FOUND_ROUTE = '/404';
