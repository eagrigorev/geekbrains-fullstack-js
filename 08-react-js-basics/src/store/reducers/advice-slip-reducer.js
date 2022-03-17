import { ADVICE_SLIP_GENERATE_QUOTE, ADVICE_SLIP_SET_IDLE, ADVICE_SLIP_SET_LOADING, ADVICE_SLIP_SET_ERROR } from "../../const";

const FETCH_STATUS = {
    LOADING: "loading",
    ERROR: "error",
    IDLE: "idle"
};
const adviceSlipInitialState = {
    quote: "Нажмите кнопку.",
    status: FETCH_STATUS.IDLE
};
export const adviceSlipReducer = (state = adviceSlipInitialState, action) => {
    switch (action.type) {
        case ADVICE_SLIP_SET_IDLE:
            return {
                ...state,
                status: FETCH_STATUS.IDLE
            };
        case ADVICE_SLIP_SET_LOADING:
            return {
                ...state,
                status: FETCH_STATUS.LOADING
            };
        case ADVICE_SLIP_SET_ERROR:
            return {
                ...state,
                status: FETCH_STATUS.ERROR
            };
        case ADVICE_SLIP_GENERATE_QUOTE:
            return {
                ...state,
                quote: action.payload.quote
            };
        default:
            return state;
    };
};