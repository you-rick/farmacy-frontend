export const setRole = (role) => {
  localStorage.setItem('role', btoa(role));
};

export const removeRole = () => {
  localStorage.removeItem('role');
};

export const getRole = () => atob(localStorage.getItem('role'));
