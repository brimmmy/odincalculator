let screen = [];
let signOne;
let firstNumber;
let secondNumber;

function populateNine() {
    screen.push("9");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populateEight() {
    screen.push("8");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populateSeven() {
    screen.push("7");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populateSix() {
    screen.push("6");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populateFive() {
    screen.push("5");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populateFour() {
    screen.push("4");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populateThree() {
    screen.push("3");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populateTwo() {
    screen.push("2");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populateOne() {
    screen.push("1");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populateZero() {
    screen.push("0");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populateDot() {
    screen.push(".");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
};
function populatePlus() {
    screen.push("+");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
    signOne = '+';
};
function populateMinus() {
    screen.push("-");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
    signOne = '-';
};
function populateMultiply() {
    screen.push("*");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
    signOne = '*';
};
function populateDivide() {
    screen.push("/");
    document.getElementById("displayScreen").innerHTML = screen.join("");
    console.log(screen);
    signOne = '/';
};

function firstArray() {
    screen.pop();
    console.log(screen);
    firstNumber = Number(screen.join(""));
    screen.push(signOne);
    screen = [];
};

function secondArray() {
    secondNumber = Number(screen.join(""));
};

function add(numberOne, numberTwo){
    document.getElementById("displayScreen").innerHTML = numberOne + numberTwo;
 };
 function subtract(numberOne, numberTwo){
    document.getElementById("displayScreen").innerHTML = numberOne - numberTwo;
 };
 function multiply(numberOne, numberTwo){
    document.getElementById("displayScreen").innerHTML = numberOne * numberTwo;
 };
 function divide(numberOne, numberTwo){
    document.getElementById("displayScreen").innerHTML = numberOne / numberTwo;
 };


function operate(sign, one, two){
    sign = signOne;
    one = firstNumber;
    two = secondNumber;
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

function clearScreen(){
    window.location.reload();
};
