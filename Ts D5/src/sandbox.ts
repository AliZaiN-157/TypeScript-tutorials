let greet: Function;

// greet = "Hello" Error [greet is a function]

greet = () => {
    console.log("Hello!");
}

const add = (a:number, b:number, c?:number | string) => {
    console.log(a+b)
    console.log(c) // undefined
}

// ? after c means this parameter is optional or not necessary

add(5,10)

const addNum = (a:number, b:number, c:number | string = 10) => {
    console.log(a+b)
    console.log(c) // output 10 in browser console
}

// This time don't use ? after c. you can also overwrite the c 

addNum(5,10,20) // third parameter can either be a number or a string

const minus = (a:number, b:number,): number => {
    return a - b;
}

let result = minus(10,7)
console.log(result)