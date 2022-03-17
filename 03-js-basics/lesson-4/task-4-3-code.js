function answerCheck(userAnswer, questions) {
    if ((userAnswer < 1) || (userAnswer > 5)) {
        alert("Ваш ответ не в диапазоне от 1 до 5, попробуйте ещё раз");
    }
    else if (isNaN(userAnswer)) {
        alert("Вы ввели некорректный символ, попробуйте ещё раз");
    }
    else if (userAnswer == 5) {
        gameFlag = false; // Пользователь решил выйти, игра останавливается
    }
    else if (userAnswer == questions[i].correct) {
        correctAnswer = true;
        alert("Вы ответили правильно и выиграли " + questions[i].cost + " рублей!");
    }
    else {
        alert("Ваш ответ неверный. Правильный ответ был под номером " + questions[i].correct + ".");
        gameFlag = false; // Игра заканчивается
        prize = 0;
    }
    return gameFlag, correctAnswer, prize;
}

var prize = 0;
var gameFlag = true; // Игра идёт
var correctAnswer; // Проверка на правильность ответа чтобы принять решение о добавлении денег
var userAnswer;
var i = 0;
alert("Кто хочет стать миллионером?");
while ((i <= questions.length) && (gameFlag == true)) {
    correctAnswer = false;
    userAnswer = +prompt("Ответьте на " + (i + 1) + "-й вопрос введя номер правильного ответа. " + questions[i].q + "Варианты ответов:\n" + questions[i].a1 + questions[i].a2 + questions[i].a3 + questions[i].a4 + "5 - Выход из игры с текущей суммой");
    answerCheck(userAnswer, questions);
    if (correctAnswer == true) {
        prize += questions[i].cost;
        i++;
        if (i == questions.length) {
            break;
        }
    }
}
alert("Игра окончена! Вы заработали " + prize + " рублей. Не миллион, конечно, но тоже очень хорошо.");
