import { useSelector } from "react-redux";
import "../firebase";
import { getMessageList } from "../store/selectors/message-list-selectors";

export const ChatWindow = () => {
    const messageList = useSelector(getMessageList);

    return messageList.map((message) =>
        <div className="message" key={messageList.indexOf(message)}>
            {message.messageListName}: {message.messageListBody}
        </ div>
    );
};