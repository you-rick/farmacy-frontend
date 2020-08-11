import * as axios from 'axios';
import {authHeaders} from "../utils/helpers/auth-headers";

const axiosInstance = axios.create({
    baseURL: 'https://qws0yjnzh8.execute-api.us-east-2.amazonaws.com/dev/'
});


export const userAPI = {
    login(data) {
        return axiosInstance.post(`login`, {}, {
            auth: authHeaders(data)
        });
    }
};
