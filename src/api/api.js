import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://qws0yjnzh8.execute-api.us-east-2.amazonaws.com/dev/'
});


export const userAPI = {
    login(uname, pass) {
        return axiosInstance.post(`login`, {}, {
            auth: {
                username: uname,
                password: pass
            }
        });
    }
};
