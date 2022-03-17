import { ADVICE_SLIP_API, ADVICE_SLIP_SET_IDLE, ADVICE_SLIP_SET_LOADING, ADVICE_SLIP_SET_ERROR, ADVICE_SLIP_GENERATE_QUOTE } from "../../const";

export const adviceSlipSetIdle = () => ({
    type: ADVICE_SLIP_SET_IDLE
});

export const adviceSlipSetLoading = () => ({
    type: ADVICE_SLIP_SET_LOADING
});

export const adviceSlipSetError = () => ({
    type: ADVICE_SLIP_SET_ERROR
});

export const adviceSlipGenerateQuote = (quote) => ({
    type: ADVICE_SLIP_GENERATE_QUOTE,
    payload: {
        quote
    }
});

export const fetchAdviceSlipQuote = () => {
    return (dispatch, getState) => {
        dispatch(adviceSlipSetLoading());
        fetch(ADVICE_SLIP_API)
            .then((response) => {
                if ((!response.ok) || (response.status !== 200)) {
                    throw Error(`Произошла ошибка с кодом ${response.status}`);
                };
                return response.json();
            })
            .then((responseJson) => {
                console.log(responseJson.slip.advice);
                dispatch(adviceSlipSetIdle());
                dispatch(adviceSlipGenerateQuote(responseJson.slip.advice));
            })
            .catch((error) => {
                console.error('error', error);
                dispatch(adviceSlipSetError());
            })
    }
};