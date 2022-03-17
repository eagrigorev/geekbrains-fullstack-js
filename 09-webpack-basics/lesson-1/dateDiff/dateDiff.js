import { DateTime } from "https://moment.github.io/luxon/es6/luxon.min.js";
import { printError, printResultDate } from "../common/printResult.js";

const getDateDiff = (dateFrom, dateTo) => {
    if (dateFrom < dateTo) {
        [dateFrom, dateTo] = [dateTo, dateFrom];
    }
    const dateFromObj = DateTime.fromISO(dateFrom);
    const dateToObj = DateTime.fromISO(dateTo);

    return dateFromObj.diff(dateToObj, ["years", "months", "days"]).toObject();
};

const dateCalc = document.getElementById("datecalc");

dateCalc.onsubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.target);
    const firstDate = dataForm.get("firstDate");
    const secondDate = dataForm.get("secondDate");
    if (!firstDate || !secondDate) {
        printError("datecalc__result", "Oooopps! Введите дату");
    } else {
        const dateRssult = getDateDiff(firstDate, secondDate);
        printResultDate("datecalc__result", dateRssult);
    }
};
