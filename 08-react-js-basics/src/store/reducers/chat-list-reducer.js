import { CHAT_LIST_ADD_ITEM, CHAT_LIST_UPDATE_FROM_FB } from "../../const";

const initialChatListState = [];
export const chatListReducer = (state = initialChatListState, action) => {
    switch (action.type) {
        case CHAT_LIST_ADD_ITEM: {
            return (
                [...state,
                {
                    chatListId: action.payload.chatListId,
                    chatListName: action.payload.chatListName,
                    chatListBot: "Bot"
                }]
            );
        }
        case CHAT_LIST_UPDATE_FROM_FB: {
            return action.payload.fbChatList;
        }
        default:
            return state;
    };
};