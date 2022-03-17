import { Button } from "@material-ui/core";
import { theme } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { getAdviceSlip } from "../store/selectors/advice-slip-selectors";
import { fetchAdviceSlipQuote } from "../store/actions/advice-slip-actions";
import { ADVICE_SLIP_DESCRIPTION } from "../const";

export const AdviceSlip = () => {
    const { quote, status } = useSelector(getAdviceSlip);
    const dispatch = useDispatch();
    const handleQuote = () => {
        dispatch(fetchAdviceSlipQuote());
    };

    if (status === "loading") {
        return (
            <div>
                <h2>AdviceSlip</h2>
                <p className="home">{ADVICE_SLIP_DESCRIPTION}</p>
                <p className="quote__message quote__message--loading">
                    Идёт загрузка...</p>
            </div>
        );
    };
    return (
        <div>
            <h2>AdviceSlip</h2>
            <p className="home">{ADVICE_SLIP_DESCRIPTION}</p>
            {status !== "error" ? (
                <>
                    <p>
                        Рандомная цитата:</p>
                    <p className="quote__message quote__message--ok">{quote}</p>
                </>
            ) :
                <p className="quote__message quote__message--error">
                    Произошла ошибка. Попробуйте ещё раз.</p>
            }
            <Button className="quote__button" type="submit" variant="outlined" onClick={handleQuote} style={{ backgroundColor: theme.palette.secondary.main }}>Сгенерировать цитату</Button>
        </div>
    );
};