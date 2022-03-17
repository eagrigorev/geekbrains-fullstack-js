import { CHAT_LIST_ADD_ITEM, CHAT_LIST_UPDATE_FROM_FB } from "../../const";
import firebase from "firebase";

export const chatListAddItem = (chatListId, chatListName) => ({
    type: CHAT_LIST_ADD_ITEM,
    payload: {
        chatListId,
        chatListName
    }
});

export const fbChatListAddItem = (chatListId, chatListName) =>
    async () => {
        const message = {
            chatListId: chatListId,
            chatListName: chatListName,
            chatListBot: "Bot"
        };
        firebase.database().ref("chatList").push(message);
    };

export const fbChatListAddItemThunk = (chatListId, chatListName) => {
    return (dispatch, getState) => {
        dispatch(fbChatListAddItem(chatListId, chatListName))
    };
};

export const chatListUpdateFromFb = (fbChatList) => ({
    type: CHAT_LIST_UPDATE_FROM_FB,
    payload: {
        fbChatList
    }
});

export const fbChatListFetchStoreUpdate = () => {
    return (dispatch, getState) => {
        firebase.database().ref("chatList").on("value", (snapshot) => {
            const fbChatList = [];
            snapshot.forEach(entry => {
                fbChatList.push(entry.val());
            });
            console.log(fbChatList);
            dispatch(chatListUpdateFromFb(fbChatList));
        });
    };
};