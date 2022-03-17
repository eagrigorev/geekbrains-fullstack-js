import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Profile } from "../components/profile";
import configureStore from 'redux-mock-store';
import { checkboxChange, nameChange } from "../store/actions/profile-actions";

describe("Profile checkbox testing", () => {
    it(("Checking that checkbox action is actually working"), () => {
        const initialState = {};
        const mockStore = configureStore()(initialState);

        render(
            <Provider store={mockStore}>
                <Profile />
            </Provider >
        );

        mockStore.dispatch(checkboxChange());
        const actions = mockStore.getActions();
        const lastAction = actions[actions.length - 1];
        expect(lastAction.type).toEqual("PROFILE_CHECKBOX");
    });
});

describe("Profile name input testing", () => {
    it(("Returns a fake name after dispatching an action"), () => {
        const initialState = {};
        const mockStore = configureStore()(initialState);

        render(
            <Provider store={mockStore}>
                <Profile />
            </Provider >
        );

        mockStore.dispatch(nameChange("John Galt"));
        const actions = mockStore.getActions();
        const lastAction = actions[actions.length - 1];
        expect(lastAction.payload.name).toEqual("John Galt");
    });
});