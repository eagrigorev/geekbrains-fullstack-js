import { FB_USER_SET_EMAIL, FB_USER_SET_PASSWORD, FB_USER_SET_LOGGED_IN, FB_USER_SET_LOGGED_OUT } from "../../const";

const FB_USER_STATUS = {
    ONLINE: true,
    OFFLINE: false
};

const fbUserInitialState = {
    online: FB_USER_STATUS.OFFLINE,
    email: "",
    password: ""
};

export const fbUserReducer = (state = fbUserInitialState, action) => {
    switch (action.type) {
        case FB_USER_SET_LOGGED_IN:
            return {
                ...state,
                online: FB_USER_STATUS.ONLINE
            };
        case FB_USER_SET_LOGGED_OUT:
            return {
                ...state,
                online: FB_USER_STATUS.OFFLINE
            };
        case FB_USER_SET_EMAIL:
            return {
                ...state,
                email: action.payload.email
            };
        case FB_USER_SET_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            };
        default:
            return state;
    };
};