import {userAPI} from "../api/api";
import {push} from "connected-react-router";
import {reset} from "redux-form";


// Initial Data
let initialState = {

};



const userReducer = (state = initialState, action) => {
     switch (action.type) {
         default:
            return state;
     }
};



// Thunks
export const login = (username, password) => {
    return (dispatch) => {
        userAPI.login(username, password)
            .then(response => {
                console.log(response);
            })
    }
};


export default userReducer;
