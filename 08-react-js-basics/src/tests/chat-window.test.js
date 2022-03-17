import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ChatWindow } from "../components/chat-window";
import configureStore from 'redux-mock-store';

describe("ChatWindow testing", () => {
    it("Returns a rendered component with a fake store", () => {
        const initialState = {
            messageList: [{
                messageListName: "John Galt",
                messageListBody: "Who am I?"
            }]
        };
        const mockStore = configureStore()(initialState);

        render(
            <Provider store={mockStore}>
                <ChatWindow />
            </Provider >
        );
        const expectedComponent = "John Galt: Who am I?";
        expect(expectedComponent).toMatchSnapshot();
    });
});