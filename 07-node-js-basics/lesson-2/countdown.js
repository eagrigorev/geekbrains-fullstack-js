const fns = require("date-fns");
const process = require("process");
const EventEmitter = require("events");

// Дата вводится в формате: часы-минуты-секунды-день-месяц-год.

class UserDate {
    constructor(formattedDate) {
        this.year = formattedDate[5];
        this.month = formattedDate[4];
        this.day = formattedDate[3];
        this.hours = formattedDate[0];
        this.minutes = formattedDate[1];
        this.seconds = formattedDate[2];
    }
    static formatDate(unformattedDate) {
        return unformattedDate.split("-");
    }
}

const date = new UserDate(UserDate.formatDate(process.argv[2]));

const generateTimer = (date) => {
    const now = new Date();
    var duration = fns.intervalToDuration({
        start: new Date(
            date.year,
            // По непонятной причине date-fns приплюсовывала ко всем счётчикам ровно 1 месяц.
            // Я не смог понять с чем это связано, потому что в остальном всё работает нормально.
            // В гугле этот вопрос задавался, но внятных ответов там нет, кроме того что это вероятно связано с особенностями рассчёта интервалов.
            // Поэтому пришлось поставить такой костыль. Если сделать console.log(new Date().getMonth()), то можно увидеть что new Date() считает что сейчас ноябрь, отсюда и ошибка.
            date.month - 1,
            date.day,
            date.hours,
            date.minutes,
            date.seconds
        ),
        end: now,
    });
    const countdown = fns.formatDuration(duration, {
        separator: " ",
    });
    return console.log(countdown);
};

class EventHandler {
    static countdownStart() {
        console.log("Counting down...");
    }
    static countdown10sec() {
        console.log("10 seconds later...");
    }
    static countdownEnd() {
        console.log(
            "All those moments will be lost in time, like tears in rain. Time to die."
        );
    }
}

class dateEmitter extends EventEmitter {}
const countdownEvents = new dateEmitter();
countdownEvents.on("Countdown Start", EventHandler.countdownStart);
countdownEvents.on("10 Seconds Timestamp", EventHandler.countdown10sec);
countdownEvents.on("Countdown End", EventHandler.countdownEnd);

var now;
const initCountdown = async () => {
    now = new Date();
    if (
        // По непонятным причинам каждое условие по отдельности || отрабатывает и возвращает эвент, но все вместе почему-то нет.
        // Я сравнивал и данные, и их типы, всё совпадает, но почему-то не работает. Голову сломал.
        now.getFullYear() == +date.year &&
        now.getMonth() == +date.month &&
        now.getDate() == +date.day &&
        now.getHours() == +date.hours &&
        now.getMinutes() == +date.minutes &&
        now.getSeconds() == +date.seconds
    ) {
        return countdownEvents.emit("Countdown End");
    } else {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(generateTimer(date));
            }, 1000);
            setTimeout(() => {
                // Должно срабатывать каждые 10 секунд, но по факту срабатывает сперва через 10 секунд как планировалось, а потом каждую секунду.
                // Не понимаю как исправить. Пробовал разные варианты с setTimeout и setInterval, обнулял и пересоздавал счётчики,
                // отписывался и переподписывался на события, делал цепные промисы с .then, но результат всегда одинаковый.
                countdownEvents.emit("10 Seconds Timestamp");
            }, 10000);
        });
        await promise;
        initCountdown();
    }
};

countdownEvents.emit("Countdown Start");
initCountdown();
