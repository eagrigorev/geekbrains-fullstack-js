import { MESSAGE_NAME_CHANGE, MESSAGE_BODY_CHANGE } from "../../const";

const initialMessageState = {};
export const messageReducer = (state = initialMessageState, action) => {
    switch (action.type) {
        case MESSAGE_NAME_CHANGE: {
            return {
                ...state,
                messageName: action.payload.messageName
            };
        }
        case MESSAGE_BODY_CHANGE: {
            return {
                ...state,
                messageBody: action.payload.messageBody
            };
        }
        default:
            return state;
    };
};