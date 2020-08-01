let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let display = document.getElementById("display");
let back = document.getElementById("btnBack");
let copy = document.getElementById("btnCopy");
let multiply = document.getElementById("btnMultiply");
let divide = document.getElementById("btnDivide");
let subtract = document.getElementById("btnSubtract");

let selectedOperation;

back.addEventListener("click", function () {
    display.value += ".";
});

copy.addEventListener("click", function () {
    display.value += "this is a copyright and a symbol NaN";
});

btnOne.addEventListener("click", function () {
    display.value += "1";
});

btnTwo.addEventListener("click", function () {
    display.value += "2";

});

btnThree.addEventListener("click", function () {
    display.value += "3";
});

btnFour.addEventListener("click", function () {
    display.value += "4";
});

btnFive.addEventListener("click", function () {
    display.value += "5";
});

btnSix.addEventListener("click", function () {
    display.value += "6";
});

btnSeven.addEventListener("click", function () {
    display.value += "7";
});

btnEight.addEventListener("click", function () {
    display.value += "8";
});

btnNine.addEventListener("click", function () {
    display.value += "9";
});

btnZero.addEventListener("click", function () {
    display.value += "0";
});

let firstValue;

btnAdd.addEventListener("click", function () {
    firstValue = display.value;
    selectedOperation = "Add";
    display.value = "";
});


btnTotal.addEventListener("click", function () {
    let secondValue;
    if (selectedOperation == "Add") {
        secondValue = parseFloat(firstValue) + parseFloat(display.value);
    } else if (selectedOperation == "Multiply") {
        secondValue = parseFloat(firstValue) * parseFloat(display.value);
    }
    else if (selectedOperation == "divide") {
        secondValue = parseFloat(firstValue) / parseFloat(display.value);
    }
    else if (selectedOperation == "subtract") {
        secondValue = parseFloat(firstValue) - parseFloat(display.value);
    }


    display.value = secondValue;
});

multiply.addEventListener("click", function () {
    firstValue = display.value;
    selectedOperation = "Multiply";
    display.value = "";
});

divide.addEventListener("click", function () {
    firstValue = display.value;
    selectedOperation = "divide";
    display.value = "";
});

subtract.addEventListener("click", function () {
    firstValue = display.value;
    selectedOperation = "subtract";
    display.value = "";

});

btnClear.addEventListener("click", function () {
    display.value = "";
});