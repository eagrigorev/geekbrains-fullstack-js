import { PROFILE_NAME_CHANGE, PROFILE_CHECKBOX } from "../../const";

export const nameChange = (name) => ({
    type: PROFILE_NAME_CHANGE,
    payload: {
        name
    }
});
export const checkboxChange = (isChecked) => ({
    type: PROFILE_CHECKBOX,
    payload: {
        isChecked
    }
});