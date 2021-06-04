// explicit types

let character: string;

let age: number;

let isLoggedIn: boolean;

// age = 'ali' Error [ we already have explicitly defined age as a number ]

age = 30  // [This is absolutely fine as age here is a number]

isLoggedIn = false  // [This is absolutely fine as isLoggedIn here is a boolean value]

// isLoggedIn = 40 Error [ we already have explicitly defined isLoggedIn is a boolean value]

// arrays

let foo : string[]; // array of only strings. 
// "But we have to intialize it with an empty array as [] = [] 
// why? because it will not allow as to push/append string inside"

let ninjas : string[] = []; // much better, similarly you can create array of numbers

// foo.push('zain') // you see an error in the browser console.
ninjas.push('ali')

// union types 

let mixed : (string | number | boolean)[] = [] // this is mixed array
mixed.push('zain')
mixed.push(30)
mixed.push(true) 
console.log(mixed)

let uid: string|number // unique identity
uid = 1 + "2a"+ 3 +"#"
console.log(uid)

// objects

let ABC: object;
ABC = {name: 'ali', age: 20};

let Example : {
    name: string,
    age: number,
    beltColor: string,
}

Example = { name: 'ali', age:20, beltColor: 'white'}