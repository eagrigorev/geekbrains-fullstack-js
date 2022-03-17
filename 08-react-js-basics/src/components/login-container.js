import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import { Login } from "./login";
import { getFbUser } from "../store/selectors/fb-user-selectors";
import { fbUserSetEmail, fbUserSetPassword } from "../store/actions/fb-user-actions";

export const LoginContainer = () => {
    const dispatch = useDispatch();
    const { email, password } = useSelector(getFbUser);
    const [error, setError] = useState("");

    const handleEmailChange = (event) => {
        dispatch(fbUserSetEmail(event.target.value));
    };

    const handlePasswordChange = (event) => {
        dispatch(fbUserSetPassword(event.target.value));
    };

    const handleLogIn = async (event) => {
        event.preventDefault();
        setError("");
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        };
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        setError("");
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        };
    };

    const dismissError = () => {
        setError("");
    };

    return <Login error={error} dismissError={dismissError} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleLogIn={handleLogIn} handleRegister={handleRegister} />;
};