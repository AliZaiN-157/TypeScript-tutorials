"use strict";
// Function Signature
// general structure of function
// let greet: Function;
// examples 1
var greet; // _ means parameter can be any thing but with correct type/signature
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// examples 2
var calc;
// in this function we are returning a number
calc = function (numOne, numTwo, action) {
    if (action == "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
