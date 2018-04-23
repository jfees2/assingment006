/*eslint-env browser*/

//STEP 1
var number = window.prompt("Enter a number");
number = Math.abs(number);
window.alert(number);


//STEP 2
var decimal = window.prompt("Enter a decimal");
decimal = Math.ceil(decimal);
window.alert(decimal);

//STEP 3
var decimal2 = window.prompt("Enter a decimal");
decimal2 = Math.floor(decimal2);
window.alert(decimal2);

//STEP 4
var numInput = window.prompt("Enter 5 numbers seperated by a comma");
var numList = numInput.split(",").map(Number);

var maxNum = Math.max.apply(null, numList);
var minNum = Math.min.apply(null, numList);

window.alert("The largest number is " + maxNum + ". The smallest number is " + minNum);

//STEP 5
var number2 = window.prompt("Enter a number");
var squareRoot = Math.sqrt(number2);
window.alert("the square root of " + number2 + " is " + squareRoot);
