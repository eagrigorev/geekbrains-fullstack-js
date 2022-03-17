const dateCalcContainer = document.getElementById("datecalc__container");
const timerContainer = document.getElementById("timer__container");

export var appSwitch = {
    calcapp: () => {
        timerContainer.innerHTML = "";
        dateCalcContainer.innerHTML = `<form id="datecalc">
                <h3>Калькулятор дат</h3>
                <label>
                    <strong>Первая дата:</strong>
                    <input type="date" name="firstDate" />
                </label>
                <label>
                    <strong>Вторая дата:</strong>
                    <input type="date" name="secondDate" />
                </label>
                <button type="submit">Рассчитать промежуток</button>
                <p id="datecalc__result"></p>
            </form>`;
        import("../dateDiff/dateDiff.js").then((resolve) => {
            console.log("Date Calc App ready");
        });
    },
    timerapp: () => {
        dateCalcContainer.innerHTML = "";
        timerContainer.innerHTML = `<form id="timer">
                <h3>Таймер</h3>
                <label>
                    <strong>Введите дату:</strong>
                    <input
                        type="text"
                        placeholder="Jan 1, 1987 14:45:21"
                        name="finishDate"
                    />
                    <button type="submit">Старт</button>
                </label>
                <p id="timer__result"></p>
            </form>
            <button id="stop">Стоп</button>`;
        import("../timer/timer.js").then((resolve) => {
            console.log("Timer App ready");
        });
    },
};
