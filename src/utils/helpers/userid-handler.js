export const setUserId = (id) => {
  localStorage.setItem('userId', btoa(id));
};

export const removeUserId = () => {
  localStorage.removeItem('userId');
};

export const getUserId = () => atob(localStorage.getItem('userId'));
