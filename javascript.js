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