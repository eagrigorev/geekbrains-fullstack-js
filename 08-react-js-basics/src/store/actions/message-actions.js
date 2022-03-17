import { MESSAGE_NAME_CHANGE, MESSAGE_BODY_CHANGE } from "../../const";

export const messageNameChange = (messageName) => ({
    type: MESSAGE_NAME_CHANGE,
    payload: {
        messageName
    }
});
export const messageBodyChange = (messageBody) => ({
    type: MESSAGE_BODY_CHANGE,
    payload: {
        messageBody
    }
});