export const printError = (id, errorText) => {
    let result = document.getElementById(id);
    result.innerText = errorText;
};

export const printResultDate = (id, { years, months, days }) => {
    let result = document.getElementById(id);
    result.innerHTML = `Год: ${years} - Месяц: ${months} - День: ${days}`;
};

export const printResultTimer = (id, { days, hours, minutes, seconds }) => {
    let result = document.getElementById(id);
    result.innerHTML = `Осталось ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
};

export const printExpired = (id) => {
    let result = document.getElementById(id);
    result.innerHTML = `Ваше время вышло`;
};
