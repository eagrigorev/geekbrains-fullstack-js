import { ChatSingleWindow } from "./chat-single-window";

export const ChatSingle = () => {
    return (
        <>
            <h2>Индивидуальная переписка</h2>
            <div className="chats__wrap">
                <ChatSingleWindow />
            </div>
        </>
    );
};