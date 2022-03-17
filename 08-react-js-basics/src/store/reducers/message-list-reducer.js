import { MESSAGE_LIST_ADD_USER, MESSAGE_LIST_ADD_BOT, MESSAGE_LIST_UPDATE_FROM_FB } from "../../const";

const initialMessageListState = [];
export const messageListReducer = (state = initialMessageListState, action) => {
    switch (action.type) {
        case MESSAGE_LIST_ADD_USER: {
            return (
                [...state,
                {
                    messageListName: action.payload.messageListName,
                    messageListBody: action.payload.messageListBody
                }]
            );
        }
        case MESSAGE_LIST_ADD_BOT: {
            return (
                [...state,
                {
                    messageListName: action.payload.messageListName,
                    messageListBody: action.payload.messageListBody
                }]
            );
        }
        case MESSAGE_LIST_UPDATE_FROM_FB: {
            return action.payload.fbMessageList;
        }
        default:
            return state;
    };
};