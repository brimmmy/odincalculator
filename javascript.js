function add(numberOne, numberTwo){
    return numberOne + numberTwo;
};
function subtract(numberOne, numberTwo){
    return numberOne - numberTwo;
};
function multiply(numberOne, numberTwo){
    return numberOne * numberTwo;
};
function divide(numberOne, numberTwo){
    return numberOne / numberTwo;
};

function operate(sign, one, two){
    if (sign == '+') {
         return add(one, two);
    } else if (sign == '-') {
         return subtract(one, two);
    } else if (sign == '*') {
        return multiply(one, two);
    } else if (sign == '/') {
        return divide(one, two);
    } else {
        return "ERRoR";
    }
};

let screen = [];
function populateNine() {
    screen.push("9");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateEight() {
    screen.push("8");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateSeven() {
    screen.push("7");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateSix() {
    screen.push("6");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateFive() {
    screen.push("5");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateFour() {
    screen.push("4");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateThree() {
    screen.push("3");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateTwo() {
    screen.push("2");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateOne() {
    screen.push("1");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateZero() {
    screen.push("0");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateDot() {
    screen.push(".");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};

function populatePlus() {
    screen.push("+");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateMinus() {
    screen.push("-");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateMultiply() {
    screen.push("*");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};
function populateDivide() {
    screen.push("/");
    document.getElementById("displayScreen").innerHTML = screen.join("");
};