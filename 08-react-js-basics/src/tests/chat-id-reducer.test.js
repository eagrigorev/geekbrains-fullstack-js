import { handleChatId } from "../store/actions/chat-id-actions";
import { chatIdReducer } from "../store/reducers/chat-id-reducer";

describe("ChatId reducer state testing", () => {
    it("Returns a state with the new chatId after handleChatId action passed", () => {
        const expected = {
            chatId: 5
        };
        const received = chatIdReducer(undefined, handleChatId(5));
        expect(received).toEqual(expected);
    });

    it("Returns the correct state after handleChatId action passed", () => {
        const expectedStore = chatIdReducer({ chatId: 0 }, handleChatId(5));
        expect(expectedStore).toMatchSnapshot();
    });
});