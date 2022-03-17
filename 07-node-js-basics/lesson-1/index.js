const colors = require("colors/safe");
const process = require("process");

var naturalArr = [];
var primeArr = [];
const color = {
    isGreen: true,
    isYellow: false,
    isRed: false,
};

const initNaturalArray = (start, end) => {
    if (isNaN(start) || isNaN(end)) {
        return console.error(colors.red("Границы массива должны быть числами"));
    } else {
        if (start >= end) {
            return console.error(
                colors.red("Недопустимые значения границ массива")
            );
        } else {
            const arrLength = end - start;
            for (let i = 0; i <= arrLength; i++) {
                naturalArr.push(start);
                start++;
            }
            return naturalArr;
        }
    }
};

const initPrimeArray = (array) => {
    let isPrime;
    array.forEach((element) => {
        for (let i = 2; i < element; i++) {
            if (element % i == 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
        if (isPrime == true) {
            primeArr.push(element);
        }
    });
    return primeArr;
};

const colorPicker = (color, array) => {
    if (array.length == 0) {
        return console.error(colors.red("В массиве нет простых чисел"));
    } else {
        array.forEach((element) => {
            switch (true) {
                case color.isGreen == true: {
                    process.stdout.write(colors.green(`${element} `));
                    color.isGreen = false;
                    color.isYellow = true;
                    break;
                }
                case color.isYellow == true: {
                    process.stdout.write(colors.yellow(`${element} `));
                    color.isYellow = false;
                    color.isRed = true;
                    break;
                }
                case color.isRed == true: {
                    process.stdout.write(colors.red(`${element} `));
                    color.isRed = false;
                    color.isGreen = true;
                    break;
                }
                default: {
                    process.stdout.write(`${element} `);
                }
            }
        });
    }
};

initNaturalArray(+process.argv[2], +process.argv[3]);
initPrimeArray(naturalArr);
colorPicker(color, primeArr);
