// explicit types
var character;
var age;
var isLoggedIn;
// age = 'ali' Error [ we already have explicitly defined age as a number ]
age = 30; // [This is absolutely fine as age here is a number]
isLoggedIn = false; // [This is absolutely fine as isLoggedIn here is a boolean value]
// isLoggedIn = 40 Error [ we already have explicitly defined isLoggedIn is a boolean value]
// arrays
var foo; // array of only strings. 
// "But we have to intialize it with an empty array as [] = [] 
// why? because it will not allow as to push/append string inside"
var ninjas = []; // much better, similarly you can create array of numbers
// foo.push('zain') // you see an error in the browser console.
ninjas.push('ali');
// union types 
var mixed = []; // this is mixed array
mixed.push('zain');
mixed.push(30);
mixed.push(true);
console.log(mixed);
var uid; // unique identity
uid = 1 + "2a" + 3 + "#";
console.log(uid);
// objects
var ABC;
ABC = { name: 'ali', age: 20 };
var Example;
Example = { name: 'ali', age: 20, beltColor: 'white' };
