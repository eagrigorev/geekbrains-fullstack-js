import { HANDLE_CHAT_ID } from "../../const";
import firebase from "firebase";

export const handleChatId = (chatId) => ({
    type: HANDLE_CHAT_ID,
    payload: {
        chatId
    }
});

export const fbSetChatId = (chatId) =>
    async () => {
        firebase.database().ref("chatId").set(chatId);
    };

export const fbSetChatIdThunk = (chatId) => {
    return (dispatch, getState) => {
        dispatch(fbSetChatId(chatId));
    };
};

export const fbGetChatId = () => {
    return (dispatch, getState) => {
        firebase.database().ref("chatId").on("value", (snapshot) => {
            const fbChatId = snapshot.val();
            if (fbChatId === null) {
                dispatch(handleChatId(0));
            } else {
                dispatch(handleChatId(fbChatId));
            };
        });
    };
};