"use strict";
var greet;
// greet = "Hello" Error [greet is a function]
greet = function () {
    console.log("Hello!");
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c); // undefined
};
// ? after c means this parameter is optional or not necessary
add(5, 10);
var addNum = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c); // output 10 in browser console
};
// This time don't use ? after c. you can also overwrite the c 
addNum(5, 10, 20); // third parameter can either be a number or a string
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
console.log(result);
