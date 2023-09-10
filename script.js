document.addEventListener("DOMContentLoaded", () => {
    let arrayNumberCalc = document.querySelectorAll(".number");

    const display = document.querySelector('.display'),
        clean = document.querySelector('.clean'),
        cleanOne = document.querySelector('.clean-one'),
        plusOrMinus = document.querySelector('.plus-or-minus'),
        multiply = document.querySelector('.multiply'),
        division = document.querySelector('.division'),
        minus = document.querySelector('.minus'),
        plus = document.querySelector('.plus'),
        point = document.querySelector('.point'),
        equal = document.querySelector('.equal'),
        sum = [];

    clean.addEventListener('click', () => {
        display.value = "";
        sum.length = 0;
    });

    cleanOne.addEventListener('click', () => {
        let inDisplay = display.value;
        display.value = inDisplay.substring(0, inDisplay.length - 1);
    });

    plusOrMinus.addEventListener('click', () => {
        let inDisplay = display.value;
        let oneSymbol = inDisplay[0];
        if (oneSymbol != "-") {
            display.value = "-" + inDisplay;
        } else if (oneSymbol == "-") {
            display.value = inDisplay.substring(1);
        }
    });

    arrayNumberCalc.forEach(number => {
        number.addEventListener('click', () => {
            display.value += number.textContent;
        });
    });

    point.addEventListener('click', () => {
        let inDisplay = display.value;
        let searchPoint = inDisplay.indexOf(".");
        if (searchPoint == -1 && inDisplay.length != 0) {
            display.value += ".";
        }
    });

    plus.addEventListener('click', () => {
        sum.push(parseFloat(display.value));
        sum.push("+");
        display.value = "";
    });

    minus.addEventListener('click', () => {
        sum.push(parseFloat(display.value));
        sum.push("-");
        display.value = "";
    });

    multiply.addEventListener('click', () => {
        sum.push(parseFloat(display.value));
        sum.push("*");
        display.value = "";
    });

    division.addEventListener('click', () => {
        sum.push(parseFloat(display.value));
        sum.push("/");
        display.value = "";
    });

    equal.addEventListener('click', () => {
        sum.push(parseFloat(display.value));
        sum.forEach(function (value, index, array) {
            if (index % 2 === 1) {
                switch (value) {
                    case "+": array[index + 1] = array[index - 1] + array[index + 1]; break;
                    case "-": array[index + 1] = array[index - 1] - array[index + 1]; break;
                    case "*": array[index + 1] = array[index - 1] * array[index + 1]; break;
                    case "/": array[index + 1] = array[index - 1] / array[index + 1]; break;
                }
            }
        });

        display.value = sum[sum.length - 1];
        sum.length = 0;
    });
});
