import { PROFILE_NAME_CHANGE, PROFILE_CHECKBOX } from "../../const";

const initialState = {
    name: 'Новый пользователь',
    isChecked: false
};
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_NAME_CHANGE: {
            return {
                ...state,
                name: action.payload.name
            };
        }
        case PROFILE_CHECKBOX: {
            return {
                ...state,
                isChecked: action.payload.isChecked
            };
        }
        default:
            return state;
    };
};