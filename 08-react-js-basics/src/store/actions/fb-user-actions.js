import { FB_USER_SET_EMAIL, FB_USER_SET_PASSWORD, FB_USER_SET_LOGGED_IN, FB_USER_SET_LOGGED_OUT } from "../../const";
import firebase from "firebase";

export const fbUserSetLoggedIn = () => ({
    type: FB_USER_SET_LOGGED_IN
});

export const fbUserSetLoggedOut = () => ({
    type: FB_USER_SET_LOGGED_OUT
});

export const fbUserSetEmail = (email) => ({
    type: FB_USER_SET_EMAIL,
    payload: {
        email
    }
});

export const fbUserSetPassword = (password) => ({
    type: FB_USER_SET_PASSWORD,
    payload: {
        password
    }
});

export const fbUserSetStatus = () => {
    return (dispatch, getState) => {
        firebase.auth().onAuthStateChanged((fbUser) => {
            if (fbUser) {
                dispatch(fbUserSetLoggedIn());
            } else {
                dispatch(fbUserSetLoggedOut());
            };
        });
    };
};