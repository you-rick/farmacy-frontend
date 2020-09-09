export const setRole = (role) => {
  localStorage.setItem('role', btoa(role));
};
export const getRole = () => atob(localStorage.getItem('role'));
export const removeRole = () => {
  localStorage.removeItem('role');
};
