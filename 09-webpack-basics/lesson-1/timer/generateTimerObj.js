class Countdown {
    constructor(days, hours, minutes, seconds) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    static daysFormat(timeLeft) {
        return Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    }
    static hoursFormat(timeLeft) {
        return Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
    }
    static minutesFormat(timeLeft) {
        return Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    }
    static secondsFormat(timeLeft) {
        return Math.floor((timeLeft % (1000 * 60)) / 1000);
    }
}

export const generateTimerObj = (timeLeft) => {
    var timerObj = new Countdown(
        Countdown.daysFormat(timeLeft),
        Countdown.hoursFormat(timeLeft),
        Countdown.minutesFormat(timeLeft),
        Countdown.secondsFormat(timeLeft)
    );
    return timerObj;
};
