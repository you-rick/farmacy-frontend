export const setRole = (role) => {
    localStorage.setItem('role', btoa(role));
};

export const removeRole = () => {
    localStorage.removeItem('role');
};

export const getRole = () => {
    return atob(localStorage.getItem('role'));
};
