import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./home";
import { LoginContainer } from "./login-container";
import { Profile } from "./profile";
import { ChatsContainer } from "./chats-container";
import { ChatSingle } from "./chat-single";
import { Error } from "./error";
import { AdviceSlip } from "./advice-slip";
import { PrivateRoute } from "./router-private";
import { fbUserSetStatus } from "../store/actions/fb-user-actions";
import { useSelector, useDispatch } from 'react-redux';
import { getFbUser } from "../store/selectors/fb-user-selectors";

export const Router = () => {
    const dispatch = useDispatch();
    const { online } = useSelector(getFbUser);
    useEffect(() => {
        dispatch(fbUserSetStatus());
    }, []);

    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={LoginContainer} />
            <PrivateRoute authenticated={online} path="/profile"><Profile /></PrivateRoute>
            <PrivateRoute authenticated={online} exact path="/chats"><ChatsContainer /></PrivateRoute>
            <PrivateRoute authenticated={online} path="/chats/:chatId"><ChatSingle /></PrivateRoute>
            <Route path='/error' component={Error} />
            <Route exact path='/chats/'><Redirect to='/chats' /></Route>
            <Route path='/advice-slip' component={AdviceSlip} />
            <Route component={Error} />
        </Switch >
    );
};