export const setToken = (data) => {
    localStorage.setItem('token', btoa(`${data.username}:${data.password}`));
};

export const removeToken = () => {
    localStorage.removeItem('token');
};
