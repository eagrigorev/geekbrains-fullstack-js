import { generateTimerObj } from "./generateTimerObj.js";
import {
    printError,
    printResultTimer,
    printExpired,
} from "../common/printResult.js";
import "https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js";

const timer = document.getElementById("timer");
const stop = document.getElementById("stop");

var sound = new Howl({
    src: ["./media/beep.mp3"],
});

const regExpDate = /[A-Z][a-z]{2}\s\d{1,2}\,\s\d{4}\s\d{2}\:\d{2}\:\d{2}/gm;

timer.onsubmit = (event) => {
    event.preventDefault();
    const timerData = new FormData(event.target);
    const stopDate = timerData.get("finishDate");
    if (!regExpDate.test(stopDate)) {
        return printError("timer__result", "Неправильный формат даты");
    }
    var countDownDate = new Date(stopDate).getTime();
    const countDown = setInterval(() => {
        var now = new Date().getTime();
        var timeLeft = countDownDate - now;
        if (timeLeft > 0) {
            printResultTimer("timer__result", generateTimerObj(timeLeft));
        }
        if (timeLeft < 10000) {
            sound.play();
            printResultTimer("timer__result", generateTimerObj(timeLeft));
        }
        if (timeLeft < 0) {
            clearInterval(countDown);
            printExpired("timer__result");
        }
        stop.onclick = () => {
            clearInterval(countDown);
            printResultTimer("timer__result", generateTimerObj(timeLeft));
        };
    }, 1000);
};
