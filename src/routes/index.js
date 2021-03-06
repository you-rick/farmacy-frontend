// API shared routes
export const API_PROFILE_ROUTE = 'profile';
export const API_RESET_PASSWORD_ROUTE = (userId) => `user/${userId}/update-password`;
export const API_FIND_TICKET_ROUTE = 'search';
export const API_FORGOT_PASSWORD_ROUTE = 'user/forgot-password';

// API USER routes
export const API_USER_DASHBOARD_ROUTE = 'user/dashboard';
export const API_USER_TICKET_UPDATE_ROUTE = (userId, ticketId) => `user/${userId}/ticket/${ticketId}/update`;
export const API_USER_GET_TICKET_INFO_ROUTE = (userId, ticketId) => `user/${userId}/ticket/${ticketId}/info`;
export const API_USER_POST_TICKET_ROUTE = (userId) => `user/${userId}/create-ticket`;

// API ADMIN routes
export const API_ADMIN_DASHBOARD_ROUTE = 'admin/dashboard';
export const API_ADMIN_TICKET_UPDATE_ROUTE = (userId, ticketId) => `admin/${userId}/ticket/${ticketId}/update`;
export const API_ADMIN_GET_TICKET_INFO_ROUTE = (userId, ticketId) => `admin/${userId}/ticket/${ticketId}/info`;
export const API_ADMIN_TICKETS_ROUTE = 'admin/tickets';
export const API_ADMIN_GET_USERS_ROUTE = 'admin/users';
export const API_ADMIN_DELETE_USER_ROUTE = (adminId, userId) => `admin/${adminId}/user/${userId}/delete`;
export const API_ADMIN_CREATE_USER_ROUTE = 'admin/create-user';
export const API_ADMIN_TICKET_SETTINGS_ROUTE = 'admin/ticket-settings';

// User routes
export const USER_BASE_ROUTE = '/user';
export const USER_LOGIN_ROUTE = '/user/login';
export const USER_FORGOT_PASS_ROUTE = '/user/forgot-password';
export const USER_PROFILE_ROUTE = '/user/profile';
export const USER_TICKETS_ROUTE = '/user/my-tickets';
export const USER_NEW_TICKET_ROUTE = '/user/create-tickets';
export const USER_RESET_PASSWORD_ROUTE = '/user/reset-password';

// Admin routes
export const ADMIN_BASE_ROUTE = '/admin';
export const ADMIN_LOGIN_ROUTE = '/admin/login';
export const ADMIN_FORGOT_PASS_ROUTE = '/admin/forgot-password';
export const ADMIN_DASHBOARD_ROUTE = '/admin/dashboard';
export const ADMIN_PROFILE_ROUTE = '/admin/profile';
export const ADMIN_TICKETS_ROUTE = '/admin/tickets';
export const ADMIN_USERS_ROUTE = '/admin/users';
export const ADMIN_CREATE_USER_ROUTE = '/admin/create-users';
export const ADMIN_RESET_PASSWORD_ROUTE = '/admin/reset-password';
export const ADMIN_TICKET_SETTINGS_ROUTE = '/admin/ticket-settings';

// User route params
export const USER_TICKETS_UNRESOLVED_PARAM = 'unresolved';
export const USER_TICKETS_UPDATED_PARAM = 'updated';
export const USER_TICKETS_SOLVED_PARAM = 'solved';

// Public routes
export const NOT_FOUND_ROUTE = '/404';
export const FORGOT_PASSWORD_ROUTE = '/forgot-password';
