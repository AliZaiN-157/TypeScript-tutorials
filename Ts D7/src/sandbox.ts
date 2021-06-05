// Function Signature
// general structure of function

// let greet: Function;

// examples 1

let greet: (_: string, b: string) => void; // _ means parameter can be any thing but with correct type/signature
greet = (name: string, greeting: string) =>{
    console.log(`${name} says ${greeting}`);
}

// examples 2
let calc: (a: number, b: number, c: string) => number;

// in this function we are returning a number

calc = (numOne: number, numTwo: number, action: string) => {
    if (action == "add"){
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
}

// example 3
let logDetails: (obj:{name:string, age: number}) => void;

type person = {name:string, age:number,}

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}