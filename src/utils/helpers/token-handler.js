export const setToken = (data) => {
  localStorage.setItem('token', btoa(`${data.username}:${data.password}`));
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const getToken = () => localStorage.getItem('token');
export const getTokenHeader = () => `Basic ${getToken()}`;

export const isLogged = () => !!localStorage.getItem('token');
