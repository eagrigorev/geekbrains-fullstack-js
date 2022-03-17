import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "../firebase";
import firebase from "firebase";
import { messageNameChange, messageBodyChange } from "../store/actions/message-actions";
import { fbMessageListAddUserThunk, fbMessageListAddBotThunk, fbMessageListFetchStoreUpdate } from "../store/actions/message-list-actions";
import { fbChatListAddItemThunk, fbChatListFetchStoreUpdate } from "../store/actions/chat-list-actions";
import { fbGetChatId, fbSetChatIdThunk } from "../store/actions/chat-id-actions";
import { getMessageList } from "../store/selectors/message-list-selectors";
import { getMessage } from "../store/selectors/message-selectors";
import { getChatId } from "../store/selectors/chat-id-selectors";
import { Chats } from "./chats";

export const db = firebase.database();

export const ChatsContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fbMessageListFetchStoreUpdate());
        dispatch(fbGetChatId());
        dispatch(fbChatListFetchStoreUpdate());

    }, []);

    const { messageName, messageBody } = useSelector(getMessage);
    const messageList = useSelector(getMessageList);
    let { chatId } = useSelector(getChatId);
    const [secondary, setSecondary] = useState(false);

    const handleMsgNameChange = (event) => {
        dispatch(messageNameChange(event.target.value));
    };

    const handleMsgBodyChange = (event) => {
        dispatch(messageBodyChange(event.target.value));
    };

    const updateMessageWithThunk = () => {
        dispatch(fbMessageListAddUserThunk(messageName, messageBody));
        dispatch(fbMessageListAddBotThunk(messageName));
        const knownUser = messageList.find(element => element.messageListName === messageName);
        if (knownUser === undefined) {
            chatId++;
            dispatch(fbChatListAddItemThunk(chatId, messageName));
            dispatch(fbSetChatIdThunk(chatId));
        };
    };

    return (
        <Chats handleMsgNameChange={handleMsgNameChange} handleMsgBodyChange={handleMsgBodyChange} updateMessageWithThunk={updateMessageWithThunk} secondary={secondary} setSecondary={setSecondary} />
    );
};