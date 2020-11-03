let arguments = process.argv;

console.log(arguments);

let number1 = arguments [2];
let number2 = arguments [3];

let num1Converted = parseInt(number1);
let num2Converted = parseInt(number2);

if (isNaN(num1Converted) || isNaN(num2Converted)) {
    console.log("Error 349923: The first or second number is not an actual number! Try again");
}

else {
    if (mathOperator ==="+") {
    console.log(`The sum of ${num1onverted} and ${num2Converted} is ${num1Converted + num2Converted}.`);
    }
}



else { {
if (mathOperator ==="-") {
console.log(`The sum of ${num1onverted} and ${num2Converted} is ${num1Converted - num2Converted}.`);
}

else if (mathOperator ==="x") {
    console.log(`The sum of ${num1onverted} and ${num2Converted} is ${num1Converted + num2Converted}.`);
} 
else if (mathOperator ==="/") {
    console.log(`The sum of ${num1onverted} and ${num2Converted} is ${num1Converted / num2Converted}.`); }
}
