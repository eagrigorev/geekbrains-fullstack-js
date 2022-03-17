import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getChatList } from "../store/selectors/chat-list-selectors";

export const ChatList = (props) => {
    const chatList = useSelector(getChatList);
    return chatList.map((message) =>
        <div key={chatList.indexOf(message)}>
            <List>
                <ListItem>
                    <Link to={`/chats/${message.chatListId}`}>
                        Чат #{message.chatListId}
                    </Link>
                </ListItem>
                <ListItem>
                    {props.secondary ? `Участники: ${message.chatListName}, ${message.chatListBot}` : null}
                </ListItem>
            </List>
        </ div >);
};