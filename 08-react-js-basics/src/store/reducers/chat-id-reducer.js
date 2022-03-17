import { HANDLE_CHAT_ID } from "../../const";

const initialIdState = {
    chatId: 0
};
export const chatIdReducer = (state = initialIdState, action) => {
    switch (action.type) {
        case HANDLE_CHAT_ID: {
            return {
                ...state,
                chatId: action.payload.chatId
            };
        }
        default:
            return state;
    };
};